// app/dashboard/fuel-tanks/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useFuelTanks } from "@/hooks/useFuelTanks";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, Plus, Droplets, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function FuelTanksPage() {
  const { data: fuelTanksData, isLoading, error } = useFuelTanks();
  const [fuelTanks, setFuelTanks] = useState<any[]>([]);

  // Use useEffect to update state after client-side hydration
  useEffect(() => {
    if (fuelTanksData) {
      setFuelTanks(Array.isArray(fuelTanksData) ? fuelTanksData : []);
    }
  }, [fuelTanksData]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Inactive":
        return "bg-gray-100 text-gray-800";
      case "Maintenance":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Create a custom Progress component that accepts indicator styling
  const StyledProgress = ({
    value,
    className,
    isLowStock,
  }: {
    value?: number;
    className?: string;
    isLowStock?: boolean;
  }) => {
    // Determine color based on value and low stock status
    const colorClass = isLowStock
      ? "bg-red-500"
      : value && value < 30
      ? "bg-yellow-500"
      : "bg-green-500";

    // Calculate the CSS variable from the color class
    let cssVariable;
    if (colorClass.includes("red")) cssVariable = "hsl(var(--red-500))";
    else if (colorClass.includes("yellow"))
      cssVariable = "hsl(var(--yellow-500))";
    else cssVariable = "hsl(var(--green-500))";

    return (
      <div className="relative">
        <Progress
          value={value}
          className={cn("h-2", className)}
          // Use direct color values instead of CSS variables that might not be defined
          style={
            {
              "--progress-foreground": cssVariable,
            } as React.CSSProperties
          }
        />
        {isLowStock && (
          <AlertTriangle className="absolute -right-1 -top-1 h-4 w-4 text-red-500" />
        )}
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="text-red-500">
          Error loading fuel tanks. Please try again.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Fuel Tanks</h1>
          <p className="text-muted-foreground">
            Manage your fuel tanks and monitor fuel levels
          </p>
        </div>
        <Link href="/dashboard/fuel-tanks/new">
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            <span>Add Fuel Tank</span>
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {fuelTanks.map((tank) => (
          <Card key={tank.fuelTankId}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{tank.fuelType}</CardTitle>
                  <CardDescription>
                    Tank ID: {tank.fuelTankId?.substring(0, 8)}
                  </CardDescription>
                </div>
                <Badge className={getStatusColor(tank.status || "")}>
                  {tank.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Current Stock</span>
                  <span className="font-medium">
                    {tank.currentStock?.toLocaleString()} L
                  </span>
                </div>
                <StyledProgress
                  value={tank.stockPercentage}
                  isLowStock={tank.isLowStock}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0%</span>
                  <span>{tank.stockPercentage?.toFixed(0)}%</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Capacity</span>
                  <p className="font-medium">
                    {tank.capacityInLiters?.toLocaleString()} L
                  </p>
                </div>
                <div>
                  <span className="text-muted-foreground">Available</span>
                  <p className="font-medium">
                    {tank.remainingCapacity?.toLocaleString()} L
                  </p>
                </div>
                {tank.lastRefilledAt && (
                  <div className="col-span-2">
                    <span className="text-muted-foreground">Last Refilled</span>
                    <p className="font-medium">
                      {format(new Date(tank.lastRefilledAt), "PPp")}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex gap-2 pt-2">
                <Link
                  href={`/dashboard/fuel-tanks/${tank.fuelTankId}`}
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full">
                    <Droplets className="mr-2 h-4 w-4" />
                    Details
                  </Button>
                </Link>
                <Link
                  href={`/dashboard/fuel-tanks/${tank.fuelTankId}/edit`}
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full">
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {fuelTanks.length === 0 && (
        <div className="flex flex-col items-center justify-center p-8 border border-dashed rounded-lg">
          <Droplets className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium">No Fuel Tanks Found</h3>
          <p className="text-muted-foreground mb-4">
            You haven't added any fuel tanks yet.
          </p>
          <Link href="/dashboard/fuel-tanks/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Your First Fuel Tank
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
