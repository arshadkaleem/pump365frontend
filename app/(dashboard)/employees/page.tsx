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
import { ApiResponse } from "@/type/apiResponse";
import { toast } from "sonner";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pencil, Plus, Droplets, AlertTriangle } from "lucide-react";
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
      <div className="space-y-6 mb-5">
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

      <Card className="p-4">
        <h1 className="text-2xl font-bold mb-4">Employee List</h1>
        <CardContent className="p-0 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Full Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Hire Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading
                ? Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i}>
                      <TableCell colSpan={6}>
                        <Skeleton className="h-6 w-full" />
                      </TableCell>
                    </TableRow>
                  ))
                : data?.map((emp: any) => (
                    <TableRow key={emp.employeeId}>
                      <TableCell>
                        {emp.fullName || `${emp.firstName} ${emp.lastName}`}
                      </TableCell>
                      <TableCell>{emp.email}</TableCell>
                      <TableCell>{emp.role}</TableCell>
                      <TableCell>{emp.phoneNumber}</TableCell>
                      <TableCell>
                        {emp.hireDate?.split("T")[0] || "—"}
                      </TableCell>
                      <TableCell>
                        {emp.isActive ? "Active" : "Inactive"}
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
