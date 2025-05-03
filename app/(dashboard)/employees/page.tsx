"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/api";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { EmployeeDto } from "@/type/data-contracts";

export default function EmployeeListPage() {
  const fetchEmployees = async function () {
    const res = await api.employeeList();

    if (res.status !== 200) {
      toast.error("Failed to fetch employees");
      return []; // Return an empty array or handle the error as needed
    }

    return res.data.data; // return it for React Query to store in `data`
  };

  const { data, isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
  });

  // const { data, isLoading } = useQuery({
  //   queryKey: ["employees"],
  //   queryFn: async () => await api.employeeList().then((res) => res.data),
  // });

  return (
    <>
      <div className="space-y-6 m-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Employees</h1>
            <p className="text-muted-foreground">Manage your Employees</p>
          </div>
          <Link href="/employees/create">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Employee</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="space-y-4 p-4">
        <Card className="p-4 rounded-md shadow-sm bg-white border border-gray-200">
          <h1 className="text-lg font-semibold text-gray-800 ">
            Employee List
          </h1>
          <CardContent className="p-0  overflow-x-auto">
            <Table className="w-full text-sm text-gray-700">
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    Full Name
                  </TableHead>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    Email
                  </TableHead>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    Role
                  </TableHead>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    Phone
                  </TableHead>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    Hire Date
                  </TableHead>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell colSpan={6}>
                        <Skeleton className="h-6 w-full" />
                      </TableCell>
                    </TableRow>
                  ))
                ) : data?.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center py-4 text-sm text-gray-500"
                    >
                      No employees found
                    </TableCell>
                  </TableRow>
                ) : (
                  data?.map((emp: EmployeeDto) => (
                    <TableRow key={emp.employeeId}>
                      <TableCell className="px-4 py-2 text-sm font-medium text-center">
                        {emp.fullName || `${emp.firstName} ${emp.lastName}`}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm font-medium text-center">
                        {emp.email}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm font-medium text-center">
                        {emp.role}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm font-medium text-center">
                        {emp.phoneNumber}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm font-medium text-center">
                        {emp.hireDate?.split("T")[0] || "—"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-sm font-medium text-center">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            emp.isActive
                              ? "bg-black text-white border border-black"
                              : "bg-gray-100 text-gray-700 border border-gray-300"
                          }`}
                        >
                          {emp.isActive ? "Active" : "Inactive"}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
