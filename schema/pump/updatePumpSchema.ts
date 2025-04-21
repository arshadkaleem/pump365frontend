import { z } from "zod";

export const updatePumpSchema = z.object({
  name: z.string().min(3, "Pump name is required"),
  licenseNumber: z.string().optional(),
  licenseExpiryDate: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^\d{2}-\d{2}-\d{4}$/.test(val),
      "Date must be in DD-MM-YYYY format"
    ),
  companyName: z.string().optional(),
  contactNumber: z
    .string()
    .min(10, "Contact number must be at least 10 digits")
    .max(15, "Contact number must be at most 15 digits"),
  email: z.string().email("Invalid email"),
  website: z.string().url("Invalid URL").optional(),
  gstNumber: z.string().optional(),
  numberOfDispensers: z
    .number({ invalid_type_error: "Must be a number" })
    .min(1, "At least one dispenser required")
    .optional(),
  fuelTypesAvailable: z.string().optional(),

  // 🕓 Transformed Opening Time
  openingTime: z
    .string()
    .transform((val) => val.split(":").slice(0, 2).join(":")) // keep only HH:mm
    .refine(
      (val) => /^([0-1]\d|2[0-3]):([0-5]\d)$/.test(val),
      "Time must be in HH:mm format"
    )
    .optional(),

  // 🕗 Transformed Closing Time
  closingTime: z
    .string()
    .transform((val) => val.split(":").slice(0, 2).join(":")) // keep only HH:mm
    .refine(
      (val) => /^([0-1]\d|2[0-3]):([0-5]\d)$/.test(val),
      "Time must be in HH:mm format"
    )
    .optional(),

  taxId: z.string().optional(),
});

export type UpdatePumpFormValues = z.infer<typeof updatePumpSchema>;

// import { z } from "zod";

// export const updatePumpSchema = z.object({
//   name: z.string().min(3, "Pump name is required"),
//   licenseNumber: z.string().optional(),
//   licenseExpiryDate: z
//     .string()
//     .optional()
//     .refine(
//       (val) => !val || /^\d{2}-\d{2}-\d{4}$/.test(val),
//       "Date must be in DD-MM-YYYY format"
//     ),
//   companyName: z.string().optional(),
//   contactNumber: z
//     .string()
//     .min(10, "Contact number must be at least 10 digits")
//     .max(15, "Contact number must be at most 15 digits"),
//   email: z.string().email("Invalid email"),
//   website: z.string().url("Invalid URL").optional(),
//   gstNumber: z.string().optional(),
//   numberOfDispensers: z
//     .number({ invalid_type_error: "Must be a number" })
//     .min(1, "At least one dispenser required")
//     .optional(),
//   fuelTypesAvailable: z.string().optional(),
//   openingTime: z
//     .string()
//     .regex(/^([0-1]\d|2[0-3]):([0-5]\d)$/, "Time must be in HH:mm format")
//     .optional(),
//   closingTime: z
//     .string()
//     .regex(/^([0-1]\d|2[0-3]):([0-5]\d)$/, "Time must be in HH:mm format")
//     .optional(),
//   taxId: z.string().optional(),
// });

// export type UpdatePumpFormValues = z.infer<typeof updatePumpSchema>;
