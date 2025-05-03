import { z } from "zod";

export const dispenserSchema = z.object({
  // fuelTankId: z.string().uuid({ message: "Fuel tank is required." }),
  numberOfNozzles: z.number(),
  dispenserNumber: z
    .number({ required_error: "Dispenser number is required." })
    .min(1, "Minimum number is 1")
    .max(100, "Maximum number is 100"),
  // fuelType: z.string().min(1, "Fuel type is required."),
  status: z.enum(["Active", "Inactive", "Maintenance"], {
    required_error: "Status is required.",
  }),
});

export type DispenserFormValues = z.infer<typeof dispenserSchema>;
