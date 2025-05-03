// "use client";
// // app/dashboard/nozzles/page.tsx
// import { Button } from "@/components/ui/button";
// import { Plus } from "lucide-react";
// import Link from "next/link";
// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";
// import { toast } from "sonner";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useQuery } from "@tanstack/react-query";
// import { api } from "@/api/api";

// const NozzleListPage = () => {
//   const fetchNozzles = async function () {
//     const res = await api.nozzleList();

//     if (res.status !== 200) {
//       toast.error("Failed to fetch nozzles");
//       return []; 
//     }

//     return res.data; 
//   };

//   const { data, isLoading } = useQuery({
//     queryKey: ["nozzles"],
//     queryFn: fetchNozzles,
//   });

//   return (
//     <>
//       <div className="space-y-6 mb-5">
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-2xl font-bold tracking-tight">Nozzles</h1>
//             <p className="text-muted-foreground">Manage your Nozzles</p>
//           </div>
//           <Link href="/nozzles/create">
//             <Button className="flex items-center gap-2">
//               <Plus className="h-4 w-4" />
//               <span>Add Nozzle</span>
//             </Button>
//           </Link>
//         </div>
//       </div>

//       <Card className="p-4">
//         <h1 className="text-2xl font-bold mb-4">Nozzle List</h1>
//         <CardContent className="p-0 overflow-x-auto">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>#</TableHead>
//                 <TableHead>Fuel Type</TableHead>
//                 <TableHead>Nozzle Number</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Last Calibration Date </TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {isLoading
//                 ? Array.from({ length: 5 }).map((_, i) => (
//                     <TableRow key={i}>
//                       <TableCell colSpan={6}>
//                         <Skeleton className="h-6 w-full" />
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 : data?.map((nozzle: any) => (
//                     <TableRow key={nozzle.nozzleId}>
//                       <TableCell>
//                         {nozzle.fuelType}
//                       </TableCell>
//                       <TableCell>{nozzle.nozzleNumber}</TableCell>
//                       <TableCell>
//                         {nozzle.hireDate?.split("T")[0] || "—"}
//                       </TableCell>
//                       <TableCell>
//                         {nozzle.isActive ? "Active" : "Inactive"}
//                       </TableCell>
//                       <TableCell>{nozzle.lastCalibrationDate}</TableCell>
//                     </TableRow>
//                   ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </>
//   );
// };

// export default NozzleListPage;
