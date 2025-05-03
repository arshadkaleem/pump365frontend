"use client";

import { api } from "@/api/api";
import { AddNozzleDialog } from "@/components/nozzles/NozzleForm";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Fuel } from "lucide-react";
import { NozzleDto } from "@/type/data-contracts";
import Link from "next/link";

// fetching dispenser details
const fetchDispenserDetails = async (fuelDispenserUnitId: string) => {
  const res = await api.fuelDispenserDetail(fuelDispenserUnitId);

  if (res.status !== 200) {
    toast.error("Failed to fetch dispenser details");
    return null;
  }

  return res.data;
};

export default function DispenserNozzlesPage() {
  const { fuelDispenserUnitId } = useParams();

  const fetchNozzles = async function () {
    const res = await api.nozzleDispenserDetail(String(fuelDispenserUnitId));

    if (res.status !== 200) {
      toast.error("Failed to fetch nozzles");
      return [];
    }

    return res.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["nozzles", fuelDispenserUnitId],
    queryFn: fetchNozzles,
  });

  // Query for dispenser details
  const { data: dispenserData, isLoading: isLoadingDispenser } = useQuery({
    queryKey: ["dispenser", fuelDispenserUnitId],
    queryFn: () => fetchDispenserDetails(String(fuelDispenserUnitId)),
  });

  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          {/* Display Dispenser Details */}
          {isLoadingDispenser ? (
            <Skeleton className="h-6 w-full" />
          ) : (
            dispenserData && (
              <Card className="p-4 w-full border-none shadow-none">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-xl font-bold">Dispenser Details</h2>
                    <p className="text-muted-foreground">
                      Manage your Assigned Employees
                    </p>
                  </div>
                  <AddNozzleDialog
                    fuelDispenserUnitId={String(fuelDispenserUnitId)}
                    dispenserNumber={dispenserData.dispenserNumber}
                  />
                </div>
                <CardContent className="p-0">
                  <div className="flex gap-4">
                    <p>
                      <strong>Dispenser Number:</strong>{" "}
                      {dispenserData.dispenserNumber}
                    </p>
                    <p>
                      <strong>Status:</strong>{" "}
                      {dispenserData.status ? "Active" : "Inactive"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>

      <div className=" space-y-4">
        <Card className="p-4 rounded-md shadow-sm bg-white border border-gray-200">
          <h1 className="text-xl font-semibold text-black ">Nozzles</h1>
          <CardContent className="p-0 overflow-x-auto">
            <Table className="w-full text-sm text-gray-700">
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    #
                  </TableHead>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    Fuel Type
                  </TableHead>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    Nozzle Number
                  </TableHead>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    Status
                  </TableHead>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    Created Date
                  </TableHead>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    Last Calibration Date
                  </TableHead>
                  <TableHead className="px-4 py-2 text-sm font-semibold text-center">
                    Actions
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
                      Nozzle not found
                    </TableCell>
                  </TableRow>
                ) : (
                  data?.map((nozzle: NozzleDto, index) => (
                    <TableRow key={nozzle.nozzleId}>
                      <TableCell className="text-center py-4 font-semibold">
                        {index + 1}
                      </TableCell>
                      <TableCell className="text-center py-4 font-semibold">
                        {nozzle.fuelType}
                      </TableCell>
                      <TableCell className="text-center py-4 font-semibold">
                        {nozzle.nozzleNumber}
                      </TableCell>
                      <TableCell className="text-center py-4 font-semibold">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            nozzle.status
                              ? "bg-black text-white border border-black"
                              : "bg-gray-100 text-gray-700 border border-gray-300"
                          }`}
                        >
                          {nozzle.status ? "Active" : "Inactive"}
                        </span>
                      </TableCell>
                      <TableCell className="text-center py-4 font-semibold">
                        {
                          nozzle.createdAt
                            ? new Date(nozzle.createdAt).toLocaleDateString()
                            : "N/A"
                        }
                      </TableCell>
                      <TableCell className="text-center py-4 font-semibold">
                        {nozzle.lastCalibrationDate
                          ? new Date(
                              nozzle.lastCalibrationDate
                            ).toLocaleDateString()
                          : "N/A"}
                      </TableCell>
                      <TableCell className="text-center py-3 font-semibold">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-1"
                        >
                          <Fuel className="w-4 h-4" />
                          Edit Nozzle
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="px-2">
            <Link
              href="/dispensers"
              className="flex items-center text-muted-foreground hover:text-primary mb-2"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Dispenser
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
