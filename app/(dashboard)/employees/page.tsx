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

export default function EmployeeListPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: async () => await api.employeeList().then((res) => res.data),
  });

  return (
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
              : data?.map((emp) => (
                  <TableRow key={emp.employeeId}>
                    <TableCell>
                      {emp.fullName || `${emp.firstName} ${emp.lastName}`}
                    </TableCell>
                    <TableCell>{emp.email}</TableCell>
                    <TableCell>{emp.role}</TableCell>
                    <TableCell>{emp.phoneNumber}</TableCell>
                    <TableCell>{emp.hireDate?.split("T")[0] || "—"}</TableCell>
                    <TableCell>
                      {emp.isActive ? "Active" : "Inactive"}
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
