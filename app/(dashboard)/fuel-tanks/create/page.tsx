// app/dashboard/fuel-tanks/new/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { fuelTankCreateSchema, type FuelTankCreate } from "@/schema/fuel-tank"; // Adjust the import path as necessary
import { useCreateFuelTank } from "@/hooks/useFuelTanks";
import { useUserStore } from "@/store/userStore";

// UI Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const fuelTypes = [
  "Petrol",
  "Diesel",
  "Premium Petrol",
  "Premium Diesel",
  "CNG",
  "Electric",
  "Other",
];

const statusOptions = ["Active", "Inactive", "Maintenance"];

export default function NewFuelTankPage() {
  const router = useRouter();
  const petrolPumpId = useUserStore((state) => state.petrolPumpId);
  const createFuelTank = useCreateFuelTank();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FuelTankCreate>({
    resolver: zodResolver(fuelTankCreateSchema),
    defaultValues: {
      petrolPumpId: petrolPumpId || "",
      status: "Active",
      currentStock: 0,
    },
  });

  // Watch values to update in real-time
  const watchCapacity = watch("capacityInLiters");
  const watchCurrentStock = watch("currentStock");

  // Handle form submission
  const onSubmit = async (data: FuelTankCreate) => {
    if (!petrolPumpId) {
      toast.error("Petrol pump ID is required");
      return;
    }

    try {
      setIsSubmitting(true);
      await createFuelTank.mutateAsync({
        ...data,
        petrolPumpId,
      });

      router.push("/fuel-tanks");
    } catch (error) {
      console.error("Error creating fuel tank:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <Link
          href="/fuel-tanks"
          className="flex items-center text-muted-foreground hover:text-primary mb-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Fuel Tanks
        </Link>
        <h1 className="text-2xl font-bold tracking-tight">Add New Fuel Tank</h1>
        <p className="text-muted-foreground">
          Create a new fuel tank to manage your inventory
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Fuel Tank Details</CardTitle>
            <CardDescription>
              Enter the details for your new fuel tank
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            Fuel Type
            <div className="space-y-2">
              <Label htmlFor="fuelType">Fuel Type</Label>
              <Select
                onValueChange={(value) => setValue("fuelType", value)}
                defaultValue=""
              >
                <SelectTrigger
                  id="fuelType"
                  className={errors.fuelType ? "border-red-500" : ""}
                >
                  <SelectValue placeholder="Select Fuel Type" />
                </SelectTrigger>
                <SelectContent>
                  {fuelTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.fuelType && (
                <p className="text-xs text-red-500">
                  {errors.fuelType.message}
                </p>
              )}
            </div>

            {/* Tank Capacity */}
            <div className="space-y-2">
              <Label htmlFor="capacityInLiters">Tank Capacity (Liters)</Label>
              <Input
                id="capacityInLiters"
                type="number"
                min="100"
                max="1000000"
                className={errors.capacityInLiters ? "border-red-500" : ""}
                {...register("capacityInLiters", { valueAsNumber: true })}
              />
              {errors.capacityInLiters && (
                <p className="text-xs text-red-500">
                  {errors.capacityInLiters.message}
                </p>
              )}
            </div>

            {/* Current Stock */}
            <div className="space-y-2">
              <Label htmlFor="currentStock">Current Stock (Liters)</Label>
              <Input
                id="currentStock"
                type="number"
                min="0"
                max={watchCapacity || 1000000}
                className={errors.currentStock ? "border-red-500" : ""}
                {...register("currentStock", { valueAsNumber: true })}
              />
              {watchCapacity &&
                watchCurrentStock !== undefined &&
                watchCurrentStock > watchCapacity && (
                  <p className="text-xs text-red-500">
                    Current stock cannot exceed tank capacity
                  </p>
                )}
              {errors.currentStock && (
                <p className="text-xs text-red-500">
                  {errors.currentStock.message}
                </p>
              )}
            </div>

            {/* Status */}
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                onValueChange={(value) => setValue("status", value as "Active" | "Inactive" | "Maintenance")}
                defaultValue="Active"
              >
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.status && (
                <p className="text-xs text-red-500">{errors.status.message}</p>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/fuel-tanks")}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                  <span>Creating...</span>
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  <span>Create Fuel Tank</span>
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
