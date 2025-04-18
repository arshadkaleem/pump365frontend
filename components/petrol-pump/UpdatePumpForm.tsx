"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  updatePumpSchema,
  UpdatePumpFormValues,
} from "@/schema/pump/updatePumpSchema";
import { api } from "@/api/api";
import { useUserStore } from "@/store/userStore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { format, parse } from "date-fns";
import { cn } from "@/lib/utils";
import {
  CalendarIcon,
  Loader2,
  Building,
  Contact,
  Clock,
  Fuel,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function UpdatePumpForm() {
  const form = useForm<UpdatePumpFormValues>({
    resolver: zodResolver(updatePumpSchema),
    defaultValues: {
      name: "",
      licenseNumber: "",
      licenseExpiryDate: "",
      companyName: "",
      contactNumber: "",
      email: "",
      gstNumber: "",
      website: "",
      numberOfDispensers: 0,
      fuelTypesAvailable: "",
      openingTime: "",
      closingTime: "",
      taxId: "",
    },
  });

  const router = useRouter();
  const petrolPumpId = useUserStore((state) => state.petrolPumpId);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const convertToISO = (date: string) => {
    const [day, month, year] = date.split("-");
    return `${year}-${month}-${day}`;
  };

  const convertToDisplayDate = (isoDate: string) => {
    const [year, month, day] = isoDate.split("-");
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    const fetchPumpData = async () => {
      if (!petrolPumpId) return;

      try {
        const response = await api.pumpDetail(petrolPumpId);

        if (!response.data.success) {
          toast.error("Failed to load pump data");
          return;
        }

        const data = response.data.data;

        form.reset({
          name: data.name || "",
          licenseNumber: data.licenseNumber || "",
          licenseExpiryDate: data.licenseExpiryDate
            ? convertToDisplayDate(data.licenseExpiryDate)
            : "",
          companyName: data.companyName || "",
          contactNumber: data.contactNumber || "",
          email: data.email || "",
          gstNumber: data.gstNumber || "",
          website: data.website || "",
          numberOfDispensers: data.numberOfDispensers || 0,
          fuelTypesAvailable: data.fuelTypesAvailable || "",
          openingTime: data.openingTime || "",
          closingTime: data.closingTime || "",
          taxId: data.taxId || "",
        });

        setIsLoading(false);
      } catch (error) {
        toast.error("Failed to load pump data");
        setIsLoading(false);
      }
    };

    fetchPumpData();
  }, [petrolPumpId, form]);

  const onSubmit = async (values: UpdatePumpFormValues) => {
    setIsSubmitting(true);
    try {
      const convertedValues = {
        ...values,
        licenseExpiryDate: values.licenseExpiryDate
          ? convertToISO(values.licenseExpiryDate)
          : undefined,
      };

      await api.pumpUpdate(petrolPumpId!, convertedValues);
      toast.success("Pump profile updated successfully!");
      router.push("/dashboard");
    } catch (error) {
      toast.error("Update failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-60 items-center justify-center text-muted-foreground">
        <Loader2 className="h-6 w-6 animate-spin mr-2" />
        <span>Loading pump details...</span>
      </div>
    );
  }

  return (
    <Card className="max-w-4xl mx-auto shadow-lg border-muted">
      <CardHeader className="bg-muted/50">
        <CardTitle className="text-2xl font-bold flex items-center">
          <Building className="mr-2 h-6 w-6" />
          Update Pump Profile
        </CardTitle>
        <CardDescription>
          Manage your petrol pump information and settings
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Basic Information Section */}
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-medium">Basic Information</h3>
                <Separator className="flex-1 ml-3" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pump Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter pump name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="companyName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter company name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* License Information Section */}
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-medium">License & Registration</h3>
                <Separator className="flex-1 ml-3" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FormField
                  name="licenseNumber"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>License Number</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter license number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="licenseExpiryDate"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>License Expiry Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                field.value
                              ) : (
                                <span>Select date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={
                              field.value
                                ? parse(field.value, "dd-MM-yyyy", new Date())
                                : undefined
                            }
                            onSelect={(date) =>
                              field.onChange(
                                date ? format(date, "dd-MM-yyyy") : ""
                              )
                            }
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="taxId"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tax ID</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter tax ID" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="gstNumber"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GST Number</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter GST number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Contact Information Section */}
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-medium">
                  <Contact className="inline mr-2 h-4 w-4" />
                  Contact Information
                </h3>
                <Separator className="flex-1 ml-3" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  name="contactNumber"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter contact number" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Enter email address"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="website"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="url"
                          placeholder="Enter website URL"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Operation Details Section */}
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-medium">
                  <Clock className="inline mr-2 h-4 w-4" />
                  Operation Details
                </h3>
                <Separator className="flex-1 ml-3" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FormField
                  name="openingTime"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Opening Time (HH:mm)</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="e.g. 09:00" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="closingTime"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Closing Time (HH:mm)</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="e.g. 21:00" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Fuel & Equipment Section */}
            <div>
              <div className="flex items-center mb-4">
                <h3 className="text-lg font-medium">
                  <Fuel className="inline mr-2 h-4 w-4" />
                  Fuel & Equipment
                </h3>
                <Separator className="flex-1 ml-3" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  name="numberOfDispensers"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of Dispensers</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          min="0"
                          onChange={(e) =>
                            field.onChange(parseInt(e.target.value) || 0)
                          }
                          placeholder="Enter number of dispensers"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="fuelTypesAvailable"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fuel Types Available</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="e.g. Petrol, Diesel, CNG"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/dashboard")}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="min-w-32"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  "Update Profile"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="bg-muted/30 text-sm text-muted-foreground flex justify-between">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <p>Ensure all details are accurate before submitting</p>
      </CardFooter>
    </Card>
  );
}

// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   updatePumpSchema,
//   UpdatePumpFormValues,
// } from "@/schema/pump/updatePumpSchema";
// import { api } from "@/api/api";
// import { useUserStore } from "@/store/userStore";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";
// import { Loader2 } from "lucide-react";

// const fields: {
//   name: keyof UpdatePumpFormValues;
//   label: string;
//   type: string;
// }[] = [
//   { name: "name", label: "Pump Name", type: "text" },
//   { name: "licenseNumber", label: "License Number", type: "text" },
//   {
//     name: "licenseExpiryDate",
//     label: "License Expiry (DD-MM-YYYY)",
//     type: "text",
//   },
//   { name: "companyName", label: "Company Name", type: "text" },
//   { name: "contactNumber", label: "Contact Number", type: "text" },
//   { name: "email", label: "Email", type: "email" },
//   { name: "gstNumber", label: "GST Number", type: "text" },
//   { name: "website", label: "Website", type: "url" },
//   { name: "numberOfDispensers", label: "Number of Dispensers", type: "number" },
//   {
//     name: "fuelTypesAvailable",
//     label: "Fuel Types (comma separated)",
//     type: "text",
//   },
//   { name: "openingTime", label: "Opening Time (HH:mm)", type: "text" },
//   { name: "closingTime", label: "Closing Time (HH:mm)", type: "text" },
//   { name: "taxId", label: "Tax ID", type: "text" },
// ];

// export function UpdatePumpForm() {
//   const form = useForm<UpdatePumpFormValues>({
//     resolver: zodResolver(updatePumpSchema),
//     defaultValues: {
//       name: "",
//       licenseNumber: "",
//       licenseExpiryDate: "",
//       companyName: "",
//       contactNumber: "",
//       email: "",
//       gstNumber: "",
//       website: "",
//       numberOfDispensers: 0,
//       fuelTypesAvailable: "",
//       openingTime: "",
//       closingTime: "",
//       taxId: "",
//     },
//   });

//   const router = useRouter();
//   const petrolPumpId = useUserStore((state) => state.petrolPumpId);
//   const [isLoading, setIsLoading] = useState(true);

//   const convertToISO = (date: string) => {
//     const [day, month, year] = date.split("-");
//     return `${year}-${month}-${day}`;
//   };

//   const convertToDisplayDate = (isoDate: string) => {
//     const [year, month, day] = isoDate.split("-");
//     return `${day}-${month}-${year}`;
//   };

//   useEffect(() => {
//     const fetchPumpData = async () => {
//       if (!petrolPumpId) return;

//       try {
//         const response = await api.pumpDetail(petrolPumpId);

//         if (!response.data.success) {
//           toast.error("Failed to load pump data");
//           return;
//         }

//         const data = response.data.data;

//         form.reset({
//           name: data.name || "",
//           licenseNumber: data.licenseNumber || "",
//           licenseExpiryDate: data.licenseExpiryDate
//             ? convertToDisplayDate(data.licenseExpiryDate)
//             : "",
//           companyName: data.companyName || "",
//           contactNumber: data.contactNumber || "",
//           email: data.email || "",
//           gstNumber: data.gstNumber || "",
//           website: data.website || "",
//           numberOfDispensers: data.numberOfDispensers ?? undefined,
//           fuelTypesAvailable: data.fuelTypesAvailable || "",
//           openingTime: data.openingTime || "",
//           closingTime: data.closingTime || "",
//           taxId: data.taxId || "",
//         });

//         setIsLoading(false);
//       } catch (error) {
//         toast.error("Failed to load pump data");
//       }
//     };

//     fetchPumpData();
//   }, [petrolPumpId, form]);

//   const onSubmit = async (values: UpdatePumpFormValues) => {
//     try {
//       const convertedValues = {
//         ...values,
//         licenseExpiryDate: values.licenseExpiryDate
//           ? convertToISO(values.licenseExpiryDate)
//           : undefined,
//       };

//       await api.pumpUpdate(petrolPumpId!, convertedValues);
//       toast.success("Pump profile updated!");
//       router.push("/dashboard");
//     } catch (error) {
//       toast.error("Update failed. Please try again.");
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="flex h-full items-center justify-center text-muted-foreground">
//         <Loader2 className="h-6 w-6 animate-spin mr-2" />
//         <span>Loading pump details...</span>
//       </div>
//     );
//   }

//   return (
//     <Card className="max-w-3xl mx-auto mt-10 shadow-xl">
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold">
//           Update Pump Profile
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <Form {...form}>
//           <form
//             onSubmit={form.handleSubmit(onSubmit)}
//             className="grid grid-cols-1 md:grid-cols-2 gap-4"
//           >
//             {fields.map(({ name, label, type }) => (
//               <FormField
//                 key={name}
//                 name={name}
//                 control={form.control}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>{label}</FormLabel>
//                     <FormControl>
//                       <Input {...field} type={type} placeholder={label} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             ))}
//             <div className="col-span-1 md:col-span-2 text-right">
//               <Button type="submit" className="w-full md:w-auto">
//                 Update
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </CardContent>
//       <CardFooter className="text-sm text-muted-foreground">
//         Ensure all details are accurate before submitting.
//       </CardFooter>
//     </Card>
//   );
// }
