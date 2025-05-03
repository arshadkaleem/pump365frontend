// "use client";

// import { api } from "@/api/api";
// import { AssignEmpShift } from "@/components/shifts/AssignEmpShiftDialog";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import { useShifts } from "@/hooks/useShifts";
// import { useQuery } from "@tanstack/react-query";
// import { FuelIcon } from "lucide-react";
// import { useParams } from "next/navigation";
// import React from "react";
// import { toast } from "sonner";

// const fetchEmpShiftDetails = async (shiftId: string) => {
//   const res = await api.shiftDetailsDetail(shiftId);
//   if (res.status !== 200) {
//     toast.error("Failed to fetch dispenser details");
//     return null;
//   }

//   return res.data;
// };

// export default function AssignedEmployees() {
//   const { shiftId } = useParams();

//   const fetchEmpDetails = async function () {
//     const res = await api.employeeShiftShiftDetail(String(shiftId));
//     if (res.status !== 200) {
//       toast.error("Failed to fetch Employee shift details");
//       return [];
//     }

//     return res.data;
//   };

//   const { data, isLoading } = useQuery({
//     queryKey: ["employees", shiftId],
//     queryFn: fetchEmpDetails,
//   });

//   // Query for shift details
//   const { data: shiftData, isLoading: isLoadingShift } = useQuery({
//     queryKey: ["shifts", useShifts],
//     queryFn: () => fetchEmpShiftDetails(String(shiftId)),
//   });
//   return (
//     <>
//       {/* <div className="p-6 space-y-4 mb-5">
//         <div className="flex justify-between items-center">
//           <div>
//             <h1 className="text-2xl font-bold tracking-tight">
//               Assigned Employees
//             </h1>
//             <p className="text-muted-foreground">
//               Manage your Assigned Employees
//             </p>
//           </div>
//           <AssignEmpShift   shiftId={String(shiftId)}/>
//         </div>
//       </div> */}
//       <div className="space-y-6">
//         <div className="flex justify-between items-center">
//           {isLoadingShift ? (
//             <Skeleton className="h-6 w-full" />
//           ) : (
//             shiftData && (
//               <Card className="p-4 m-0 w-full border-none shadow-none">
//                 <div className="flex justify-between mb-0">
//                   <h2 className="text-xl font-bold">Shift Details</h2>
//                   <AssignEmpShift
//                     shiftId={String(shiftId)}
//                     shiftNumber={shiftData.shiftNumber}
//                   />
//                 </div>
//                 <CardContent>
//                   <div className="flex gap-8">
//                     <p>
//                       <strong>Dispenser Number:</strong>{" "}
//                       {shiftData.shiftNumber}
//                     </p>
//                     <p>
//                       <strong>Status:</strong>{" "}
//                       {shiftData.status ? "Active" : "Inactive"}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             )
//           )}
//         </div>
//       </div>

// <div className="p-6 space-y-4">
//     <Card className="p-4">
//         <h1 className="text-2xl font-bold">Assigned Employees</h1>
//         <CardContent className="p-0 overflow-x-auto">
//             <Table>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead>#</TableHead>
//                         <TableHead>Employee Name</TableHead>
//                         <TableHead>Shift Start Time</TableHead>
//                         <TableHead>Shift End Time</TableHead>
//                         <TableHead>Shift End Time</TableHead>
//                         <TableHead>Shift Start Date</TableHead>
//                         <TableHead>Shift End Date</TableHead>
//                         <TableHead>Actions</TableHead>
//                     </TableRow>
//                 </TableHeader>

//                 <TableBody>
//                 {isLoading
//                   ? Array.from({ length: 5 }).map((_, i) => (
//                       <TableRow key={i}>
//                         <TableCell colSpan={6}>
//                           <Skeleton className="h-6 w-full" />
//                         </TableCell>
//                       </TableRow>
//                     ))
//                   : data?.map(({shifts},index) => (
//                       <TableRow key={shifts.shiftId}>
//                         <TableCell>{shifts + 1}</TableCell>
//                         <TableCell>{shifts.employeeName}</TableCell>
//                         <TableCell>{shifts.shiftStartTime}</TableCell>
//                         <TableCell>{shifts.shiftEndTime}</TableCell>
//                         <TableCell>{shifts.startDate}</TableCell>
//                         <TableCell>{shifts.endDate}</TableCell>
//                         <TableCell>
//                           {shifts.status ? "Active" : "Inactive"}
//                         </TableCell>
//                         <TableCell>
//                           {new Date(
//                             shifts.createdAt
//                           ).toLocaleDateString()}
//                         </TableCell>
//                         <TableCell>
//                           {new Date(
//                             shifts.lastCalibrationDate
//                           ).toLocaleDateString()}
//                         </TableCell>
//                         <TableCell>
//                           <Button
//                             variant="outline"
//                             size="sm"
//                             className="flex items-center gap-1"
//                           >
//                             <FuelIcon className="w-4 h-4" />
//                             Edit
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//               </TableBody>
//             </Table>

//         </CardContent>
//     </Card>
// </div>

//     </>
//   );
// }
"use client";

import { api } from "@/api/api";
import { AssignEmpShift } from "@/components/shifts/AssignEmpShiftDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useShifts } from "@/hooks/useShifts";
import { EmployeeShiftDTO } from "@/type/data-contracts";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Edit} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const fetchEmpShiftDetails = async (shiftId: string) => {
  const res = await api.shiftDetailsDetail(shiftId);
  if (res.status !== 200) {
    toast.error("Failed to fetch dispenser details");
    return null;
  }

  return res.data;
};

export default function AssignedEmployees() {
  const { shiftId } = useParams();

  const fetchEmpDetails = async function () {
    const res = await api.employeeShiftShiftDetail(String(shiftId));
    if (res.status !== 200) {
      toast.error("Failed to fetch Employee shift details");
      return [];
    }

    return res.data.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["employees", shiftId],
    queryFn: fetchEmpDetails,
  });

  // Query for shift details
  const { data: shiftData, isLoading: isLoadingShift } = useQuery({
    queryKey: ["shifts", useShifts],
    queryFn: () => fetchEmpShiftDetails(String(shiftId)),
  });
  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          {isLoadingShift ? (
            <Skeleton className="h-6 w-full" />
          ) : (
            shiftData && (
              <Card className="p-4 w-full border-none shadow-none">
                <div className="flex justify-between">
                  <div>
                    <h1 className="text-xl font-bold">Assigned Employees</h1>
                    <p className="text-muted-foreground">
                      Manage your Assigned Employees
                    </p>
                  </div>
                  <AssignEmpShift
                    shiftId={String(shiftId)}
                    shiftNumber={shiftData.shiftNumber || "N/A"}
                  />
                </div>
                <CardContent className="p-0">
                  <p className="font-medium">
                    Shift Number: {shiftData.shiftNumber || "N/A"}
                  </p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>

      <div className="m-4 space-y-4">
        <Card className="p-4 rounded-md shadow-sm bg-white border border-gray-200">
          <h1 className="text-xl font-semibold text-black">
            Assigned Employees List
          </h1>
          <CardContent className="p-0 overflow-x-auto">
            <Table className="w-full text-sm text-gray-700">
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead>#</TableHead>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    Employee Name
                  </TableHead>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    Shift Start Time
                  </TableHead>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    Shift End Time
                  </TableHead>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    Shift Start Date
                  </TableHead>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    Shift End Date
                  </TableHead>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {isLoading
                  ? Array.from({ length: 5 }).map((_, i) => (
                      <TableRow key={i}>
                        <TableCell colSpan={8}>
                          <Skeleton className="h-6 w-full" />
                        </TableCell>
                      </TableRow>
                    ))
                    : data?.length === 0 ? (
                      <TableRow>
                        <TableCell
                          colSpan={6}
                          className="text-center py-4 text-sm text-gray-500"
                        >
                          No employees found
                        </TableCell>
                      </TableRow>
                    ) 
                  : data?.map((shift: EmployeeShiftDTO, index: number) => (
                      <TableRow key={shift.employeeShiftId}>
                        <TableCell className="text-center py-4 font-semibold">
                          {index + 1}
                        </TableCell>
                        <TableCell className="text-center py-4 font-semibold">
                          {shift.employeeName}
                        </TableCell>
                        <TableCell className="text-center py-4 font-semibold">
                          {shift.shiftStartTime}
                        </TableCell>
                        <TableCell className="text-center py-4 font-semibold">
                          {shift.shiftEndTime}
                        </TableCell>
                        <TableCell className="text-center py-4 font-semibold">
                          {shift.startDate}
                        </TableCell>
                        <TableCell className="text-center py-4 font-semibold">
                          {shift.endDate}
                        </TableCell>
                        <TableCell className="text-center py-4 font-semibold">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-1"
                          >
                            <Edit className="w-4 h-4" />
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="px-1">
            <Link
              href="/shifts"
              className="flex items-center text-muted-foreground hover:text-primary mb-2"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Shifts
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
