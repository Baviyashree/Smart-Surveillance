const db = require("../db/db");
const CAMERA_LOCATIONS = {
  cam01: { lat: 13.0827, lng: 80.2707 },
  cam02: { lat: 13.0850, lng: 80.2740 },
  cam03: { lat: 13.0800, lng: 80.2680 },
  cam04: { lat: 13.0835, lng: 80.2720 },
};
const saveAlert = async (req, res) => {
  let { camera_id, keyword, lat, lng, timestamp } = req.body;
    camera_id = camera_id || "unknown";
  // lat = lat ?? null;  // null instead of undefined
  // lng = lng ?? null;
  if (!lat || !lng) {
    const location = CAMERA_LOCATIONS[camera_id];
    if (location) {
  lat = location.lat ??null ;  // null instead of undefined
  lng = location.lng ?? null;
    }else {
      lat = null;
      lng = null;
    }
  }

  timestamp = timestamp || new Date();

  try {
    // ✅ Use new variable
    let mappedKeyword = "no";
    if (keyword && keyword.toLowerCase() === "danger") {
      mappedKeyword = "yes";
    }


    const [result] = await db.execute(
      "INSERT INTO alerts2 (camera_id, keyword, lat, lng, timestamp) VALUES (?, ?, ?, ?, ?)",
      [camera_id, mappedKeyword, lat, lng, timestamp]
    );

    console.log(
      `[DB] Alert saved: Camera=${camera_id}, Keyword=${mappedKeyword}, Location=(${lat}, ${lng})`
    );

//     res.status(201).json({ message: "Alert saved" });
//     // res.status(201).send("Alert saved");
//   } catch (err) {
//     console.error("❌ DB error:", err);
//     res.status(500).json({ error: err.message });
//   }
// };
const alertMsg = `🚨 ALERT from ${camera_id}\nKeyword: ${mappedKeyword.toUpperCase()}\nLocation: (${lat}, ${lng})\nTime: ${timestamp}`;
require("dotenv").config();
const twilio = require("twilio");
    await client.messages.create({
      body: alertMsg,
      from: process.env.TWILIO_PHONE,   // Twilio number
      to: process.env.RESCUE_TEAM_PHONE // Rescue team number
    });

    console.log("✅ Rescue team notified via SMS");

    res.status(201).json({ message: "Alert saved & rescue team notified" });
  } catch (err) {
    console.error("❌ DB/Twilio error:", err);
    res.status(500).json({ error: err.message });
  }
};

const getAlerts = async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM alerts2 ORDER BY timestamp DESC");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { saveAlert, getAlerts };

