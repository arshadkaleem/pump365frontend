// app/models/fuel-tank.ts
import { z } from "zod";

export const fuelTankSchema = z.object({
  fuelTankId: z.string().uuid().optional(),
  petrolPumpId: z.string().uuid(),
  fuelType: z.string().min(1, "Fuel type is required").max(50),
  capacityInLiters: z
    .number()
    .min(100, "Capacity must be at least 100 liters")
    .max(1000000, "Capacity cannot exceed 1,000,000 liters"),
  currentStock: z
    .number()
    .min(0, "Current stock cannot be negative")
    .max(1000000, "Current stock cannot exceed 1,000,000 liters")
    .optional(),
  status: z.enum(["Active", "Inactive", "Maintenance"]).optional(),
  lastRefilledAt: z.string().datetime().optional().nullable(),
  createdAt: z.string().datetime().optional().nullable(),
  updatedAt: z.string().datetime().optional().nullable(),
  stockPercentage: z.number().optional(),
  isLowStock: z.boolean().optional(),
  remainingCapacity: z.number().optional(),
});

export const fuelTankCreateSchema = z.object({
  petrolPumpId: z.string().uuid(),
  fuelType: z.string().min(1, "Fuel type is required").max(50),
  capacityInLiters: z
    .number()
    .min(100, "Capacity must be at least 100 liters")
    .max(1000000, "Capacity cannot exceed 1,000,000 liters"),
  currentStock: z
    .number()
    .min(0, "Current stock cannot be negative")
    .max(1000000, "Current stock cannot exceed 1,000,000 liters")
    .optional(),
  status: z.enum(["Active", "Inactive", "Maintenance"]).optional(),
});

export const fuelTankUpdateSchema = z.object({
  fuelTankId: z.string().uuid(),
  fuelType: z.string().min(1, "Fuel type is required").max(50).optional(),
  capacityInLiters: z
    .number()
    .min(100, "Capacity must be at least 100 liters")
    .max(1000000, "Capacity cannot exceed 1,000,000 liters")
    .optional(),
  currentStock: z
    .number()
    .min(0, "Current stock cannot be negative")
    .max(1000000, "Current stock cannot exceed 1,000,000 liters")
    .optional(),
  status: z.enum(["Active", "Inactive", "Maintenance"]).optional(),
});

export const fuelTankStockAdjustmentSchema = z.object({
  fuelTankId: z.string().uuid(),
  adjustmentAmount: z
    .number()
    .min(-1000000, "Adjustment cannot be less than -1,000,000 liters")
    .max(1000000, "Adjustment cannot exceed 1,000,000 liters"),
  adjustmentReason: z.string().min(1, "Reason is required").max(255),
  adjustedByEmployeeId: z.string().uuid().optional().nullable(),
  referenceNumber: z.string().max(50).optional().nullable(),
  notes: z.string().max(500).optional().nullable(),
});

export type FuelTank = z.infer<typeof fuelTankSchema>;
export type FuelTankCreate = z.infer<typeof fuelTankCreateSchema>;
export type FuelTankUpdate = z.infer<typeof fuelTankUpdateSchema>;
export type FuelTankStockAdjustment = z.infer<
  typeof fuelTankStockAdjustmentSchema
>;
