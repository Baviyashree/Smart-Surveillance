// // src/pages/Homepage.jsx
// import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
// import { Button } from "./components/ui/button";
// import { Camera, AlertTriangle, Clock, ShieldCheck, Play, FolderOpen, Settings } from "lucide-react";

// export default function Homepage() {
//   return (
//     <div className="p-6 space-y-6">
//       {/* 🔹 1. Welcome Banner */}
//       <Card className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg rounded-2xl">
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold">
//             Welcome to Smart Surveillance Dashboard
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-lg">AI-powered security monitoring at your fingertips.</p>
//         </CardContent>
//       </Card>

//       {/* 🔹 2. Quick Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <Card className="shadow hover:shadow-md cursor-pointer">
//           <CardContent className="flex flex-col items-center p-4">
//             <Camera className="h-8 w-8 text-indigo-600" />
//             <h3 className="text-xl font-semibold mt-2">2</h3>
//             <p className="text-gray-500">Active Cameras</p>
//           </CardContent>
//         </Card>

//         <Card className="shadow hover:shadow-md cursor-pointer">
//           <CardContent className="flex flex-col items-center p-4">
//             <AlertTriangle className="h-8 w-8 text-red-500" />
//             <h3 className="text-xl font-semibold mt-2">5</h3>
//             <p className="text-gray-500">Alerts Today</p>
//           </CardContent>
//         </Card>

//         <Card className="shadow hover:shadow-md cursor-pointer">
//           <CardContent className="flex flex-col items-center p-4">
//             <Clock className="h-8 w-8 text-yellow-500" />
//             <h3 className="text-lg font-semibold mt-2">12:45 PM, 17 Aug</h3>
//             <p className="text-gray-500">Last Detection</p>
//           </CardContent>
//         </Card>

//         <Card className="shadow hover:shadow-md cursor-pointer">
//           <CardContent className="flex flex-col items-center p-4">
//             <ShieldCheck className="h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mt-2">Active</h3>
//             <p className="text-gray-500">System Status</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* 🔹 3. Live Preview Thumbnail */}
//       <Card className="shadow-lg">
//         <CardHeader>
//           <CardTitle>Live Preview</CardTitle>
//         </CardHeader>
//         <CardContent className="flex flex-col items-center">
//           <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
//             <span className="text-gray-500">[Camera Preview Placeholder]</span>
//           </div>
//           <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700">
//             <Play className="mr-2 h-4 w-4" /> Start Surveillance
//           </Button>
//         </CardContent>
//       </Card>

//       {/* 🔹 4. Alerts Overview */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Latest Alerts</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="border-b text-gray-600">
//                 <th className="p-2">Time</th>
//                 <th className="p-2">Location</th>
//                 <th className="p-2">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b">
//                 <td className="p-2">12:30 PM</td>
//                 <td className="p-2">Entrance Gate</td>
//                 <td className="p-2 text-red-500">Unresolved</td>
//               </tr>
//               <tr className="border-b">
//                 <td className="p-2">11:50 AM</td>
//                 <td className="p-2">Backyard</td>
//                 <td className="p-2 text-green-500">Resolved</td>
//               </tr>
//               <tr>
//                 <td className="p-2">10:15 AM</td>
//                 <td className="p-2">Parking Lot</td>
//                 <td className="p-2 text-red-500">Unresolved</td>
//               </tr>
//             </tbody>
//           </table>
//         </CardContent>
//       </Card>

//       {/* 🔹 5. Quick Actions */}
//       <div className="flex gap-4">
//         <Button className="bg-indigo-600 hover:bg-indigo-700">
//           <Play className="mr-2 h-4 w-4" /> Start Monitoring
//         </Button>
//         <Button className="bg-gray-600 hover:bg-gray-700">
//           <FolderOpen className="mr-2 h-4 w-4" /> View All Alerts
//         </Button>
//         <Button className="bg-gray-800 hover:bg-gray-900">
//           <Settings className="mr-2 h-4 w-4" /> Settings
//         </Button>
//       </div>

//       {/* 🔹 6. System Health Widget */}
//       <Card>
//         <CardHeader>
//           <CardTitle>System Health</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="flex justify-between items-center">
//             <p>AI Model: <span className="text-green-600 font-semibold">Running ✅</span></p>
//             <p>Camera: <span className="text-green-600 font-semibold">Connected ✅</span></p>
//           </div>
//           <div className="w-full bg-gray-200 h-2 rounded mt-3">
//             <div className="bg-green-500 h-2 rounded" style={{ width: "90%" }}></div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


