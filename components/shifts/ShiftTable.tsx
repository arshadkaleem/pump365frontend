"use client";

import { useState } from "react";
import { useShifts } from "@/hooks/useShifts";
import { ShiftDTO } from "@/schema/shift";
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

interface Props {
  petrolPumpId: string;
}

export function ShiftTable({ petrolPumpId }: Props) {
  const { data: shifts = [], isLoading } = useShifts(petrolPumpId);
  const [page, setPage] = useState(1);
  const perPage = 5;

  const paginated = shifts.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Shift #</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>End Time</TableHead>
            <TableHead>Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={4}>Loading...</TableCell>
            </TableRow>
          ) : paginated.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4}>No shifts found</TableCell>
            </TableRow>
          ) : (
            paginated.map((shift: ShiftDTO) => (
              <TableRow key={shift.shiftId}>
                <TableCell>{shift.shiftNumber}</TableCell>
                <TableCell>{shift.startTime}</TableCell>
                <TableCell>{shift.endTime}</TableCell>
                <TableCell>{shift.shiftDuration} mins</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <Pagination>
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
    </div>
  );
}
