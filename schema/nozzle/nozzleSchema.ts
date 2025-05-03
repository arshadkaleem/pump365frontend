import { z } from "zod";

export const nozzleSchema = z.object({
  fuelTankId: z.string().uuid({ message: "Fuel tank is required." }),
  fuelDispenserUnitId: z
    .string()
    .uuid({ message: "Fuel dispenser unit is required." }),
  petrolPumpId: z.string().uuid(),
  fuelType: z.string().min(1, "Fuel type is required").max(50),
  nozzleNumber: z.number(),
  createdAt: z.string().datetime().optional().nullable(),
  lastCalibrationDate: z.string().datetime().optional().nullable(),
  updatedAt: z.string().datetime().optional().nullable(),
  dispenserNumber: z
    .number({ required_error: "Dispenser number is required." })
    .min(1, "Minimum number is 1")
    .max(100, "Maximum number is 100"),
    status: z.enum(["Active", "Inactive", "Maintenance"], {
        required_error: "Status is required.",
      }),
});

export type NozzleCreateForm = z.infer<typeof nozzleSchema>;
