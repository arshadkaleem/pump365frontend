"use client";

import { useFuelDispenserList } from "@/hooks/useFuelDispenser";
import { FuelDispenserUnitDto } from "@/type/data-contracts";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {  Fuel } from "lucide-react";
import CreateDispenserPage from "@/components/fuelDispenser/CreateFuelDispenserDialog";

export default function DispensersListPage() {
  const { data, isLoading, error } = useFuelDispenserList();

  const columns: ColumnDef<FuelDispenserUnitDto>[] = [
    {
      accessorKey: "dispenserNumber",
      header: "Dispenser Number",
    },
    {
      header: "Number of Nozzles",
      accessorKey: "numberOfNozzles",
      cell: ({ row }) =>
        row.getValue("numberOfNozzles") || (
          <span className="text-muted-foreground">N/A</span>
        ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <Badge
            variant={
              status === "Active"
                ? "default"
                : status === "Inactive"
                ? "secondary"
                : "destructive"
            }
          >
            {status}
          </Badge>
        );
      },
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: ({ row }) => {
        const date = row.getValue("createdAt") as string;
        return new Date(date).toLocaleDateString();
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => {
        const fuelDispenserUnitId = row.original.fuelDispenserUnitId;
        return (
          <Link href={`/dispensers/${fuelDispenserUnitId}/nozzle`}>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1"
            >
              <Fuel className="w-4 h-4" />
              View Nozzles
            </Button>
          </Link>
        );
      },
    },
  ];

  if (isLoading) return <div className="p-4">Loading Dispensers...</div>;
  if (error)
    return (
      <div className="p-4 text-destructive">Error fetching Dispensers.</div>
    );

  return (
    <>
      <div className="space-y-6 m-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Dispensers</h1>
            <p className="text-muted-foreground">Manage your Dispenser</p>
          </div>
          {/* <Link href="/dispensers/create">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Dispenser</span>
            </Button>
          </Link> */}
          <CreateDispenserPage/>
        </div>
      </div>

      <div className="space-y-4 p-4 mt-6">
        <Card className="p-4 rounded-md shadow-sm bg-white border border-gray-200">
          <h1 className="text-lg font-semibold text-gray-800 ">
            Fuel Dispenser List
          </h1>
          <CardContent className="p-0 overflow-x-auto">
            {data && data.length === 0 ? (
              <div className="p-4 text-center text-sm text-muted-foreground">
                No dispensers found.
              </div>
            ) : (
              <DataTable columns={columns} data={data || []} />
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
