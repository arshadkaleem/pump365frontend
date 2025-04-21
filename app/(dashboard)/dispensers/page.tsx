"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/api";
import { FuelDispenserUnitDto } from "@/type/data-contracts";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pencil, Plus, Droplets, AlertTriangle } from "lucide-react";
export default function DispensersListPage() {
  const { data, isLoading, error } = useQuery<FuelDispenserUnitDto[]>({
    queryKey: ["dispensers"],
    queryFn: async () => {
      const response = await api.fuelDispenserList();
      return response.data;
    },
  });

  // Columns definition
  const columns: ColumnDef<FuelDispenserUnitDto>[] = [
    {
      accessorKey: "dispenserNumber",
      header: "Dispenser Number",
    },
    {
      accessorKey: "fuelType",
      header: "Fuel Type",
    },
    {
      accessorKey: "fuelTankName",
      header: "Fuel Tank",
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
  ];

  if (isLoading) return <div className="p-4">Loading dispensers...</div>;
  if (error)
    return (
      <div className="p-4 text-destructive">Error fetching dispensers.</div>
    );

  return (
    <>

<div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dispensers</h1>
          <p className="text-muted-foreground">
            Manage your Dispenser
          </p>
        </div>
        <Link href="/dispensers/create">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            <span>Add Dispenser</span>
          </Button>
        </Link>
      </div>
    </div>

      <div className="p-6 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Fuel Dispenser Units</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={data || []} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
