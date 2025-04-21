// schema/shift.ts
import { z } from "zod";

export const shiftSchema = z.object({
  shiftNumber: z
    .number({ invalid_type_error: "Shift number must be a number" })
    .min(1, "Shift number is required"),
  startTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Start time must be in HH:mm format"),
  endTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "End time must be in HH:mm format"),
  shiftDuration: z
    .number({ invalid_type_error: "Duration must be a number" })
    .min(1, "Duration is required"),
});

export type ShiftFormValues = z.infer<typeof shiftSchema>;
