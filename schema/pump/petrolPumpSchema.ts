import { z } from "zod";

export const petrolPumpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  licenseNumber: z.string().optional().nullable(),
  companyName: z.string().optional().nullable(),
  contactNumber: z.string().min(1, "Contact number is required"),
  SAPNo: z.string().min(5, "SAP number is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type PetrolPumpFormValues = z.infer<typeof petrolPumpSchema>;
