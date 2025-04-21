import { z } from "zod";

export const employeeCreateSchema = z.object({
  petrolPumpId: z.string().uuid(),
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email(),
  password: z.string().min(6).max(100),
  role: z.string().min(1),
  hireDate: z.string(), // ISO format expected (date-time)
  dateOfBirth: z.string().nullable().optional(), // format: date (yyyy-mm-dd)
  governmentId: z.string().max(50).nullable().optional(),
  address: z.string().max(255).nullable().optional(),
  city: z.string().max(100).nullable().optional(),
  state: z.string().max(100).nullable().optional(),
  zipCode: z.string().max(10).nullable().optional(),
  phoneNumber: z.string().min(1).max(15),
  emergencyContact: z.string().max(15).nullable().optional(),
});
