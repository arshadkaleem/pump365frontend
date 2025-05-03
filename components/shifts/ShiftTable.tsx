"use client";

import { useState } from "react";
import { useShifts } from "@/hooks/useShifts";
import { ShiftDTO } from "@/type/data-contracts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { Users } from "lucide-react";

interface Props {
  petrolPumpId: string;
}

export function ShiftTable({ petrolPumpId }: Props) {
  const { data: shifts = [], isLoading } = useShifts(petrolPumpId);
  const [page, setPage] = useState(1);
  const perPage = 5;

  const paginated = shifts.slice((page - 1) * perPage, page * perPage);

  return (
    <Card className="p-4 rounded-md shadow-sm bg-white border border-gray-200">
      <h1 className="text-lg font-semibold text-gray-800 ">Shift List</h1>
      <CardContent className="p-0  overflow-x-auto">
        <Table className="w-full text-sm text-gray-700">
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                #Shift 
              </TableHead>
              <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                Start Time
              </TableHead>
              <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                End Time
              </TableHead>
              <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                Duration
              </TableHead>
              <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  Loading...
                </TableCell>
              </TableRow>
            ) : paginated.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  No shifts found
                </TableCell>
              </TableRow>
            ) : (
              paginated.map((shift: ShiftDTO) => (
                <TableRow
                  key={shift.shiftId}
                  className="border-b hover:bg-gray-50"
                >
                  <TableCell className="px-4 py-2 text-sm font-medium text-center">
                    {shift.shiftNumber}
                  </TableCell>
                  <TableCell className="px-4 py-2 text-sm font-medium text-center">
                    {shift.startTime}
                  </TableCell>
                  <TableCell className="px-4 py-2 text-sm font-medium text-center">
                    {shift.endTime}
                  </TableCell>
                  <TableCell className="px-4 py-2 text-sm font-medium text-center">
                    {shift.shiftDuration} Hr
                  </TableCell>
                  <TableCell className="px-4 py-2 text-center">
                    <Link
                      href={`/shifts/${shift.shiftId}/employees`}
                      className="flex justify-center"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1 text-primary-600 border-primary-600 hover:bg-primary-50"
                      >
                        <Users className="w-4 h-4" />
                        View Employees
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        <div className="mt-4 flex justify-between items-center">
          <Pagination className="w-100">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className={page === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setPage((p) => (p * perPage < shifts.length ? p + 1 : p))
                  }
                  className={
                    page * perPage >= shifts.length
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <p className="text-sm text-gray-500">
            Page {page} of {Math.ceil(shifts.length / perPage)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
