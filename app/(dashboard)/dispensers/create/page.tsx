"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dispenserSchema, DispenserFormValues } from "@/schema/dispenserSchema";
import { api } from "@/api/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function CreateDispenserPage() {
  const router = useRouter();

  const form = useForm<DispenserFormValues>({
    resolver: zodResolver(dispenserSchema),
    defaultValues: {
      fuelTankId: "",
      dispenserNumber: 1,
      fuelType: "",
      status: "Active",
    },
  });

  const { data: fuelTanks } = useQuery({
    queryKey: ["fuelTanks"],
    queryFn: async () => {
      const res = await api.fuelTankList();
      console.log("fuelTanks", res.data.data);
      
      return res.data.data;
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: DispenserFormValues) =>
      api.fuelDispenserCreate({
        fuelTankId: data.fuelTankId,
        dispenserNumber: data.dispenserNumber,
        fuelType: data.fuelType,
        status: data.status,
      }),
    onSuccess: () => {
      toast.success("Dispenser created successfully.");
      router.push("/dashboard/dispensers");
    },
    onError: () => {
      toast.error("Error creating dispenser.");
    },
  });

  async function onSubmit(data: DispenserFormValues) {
    await mutateAsync(data);
  }

  return (
    <div className="p-6 max-w-xl">
      <Card>
        <CardHeader>
          <CardTitle>Create Fuel Dispenser</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Fuel Tank Selector */}
              <FormField
                control={form.control}
                name="fuelTankId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fuel Tank</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a fuel tank" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {fuelTanks?.map((tank) => (
                          <SelectItem
                            key={tank.fuelTankId}
                            value={tank.fuelTankId!}
                          >
                            {tank.fuelType} - {tank.capacityInLiters}L
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Dispenser Number */}
              <FormField
                control={form.control}
                name="dispenserNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dispenser Number</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min={1}
                        max={100}
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Fuel Type */}
              <FormField
                control={form.control}
                name="fuelType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fuel Type</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter fuel type" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Status */}
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                        <SelectItem value="Maintenance">Maintenance</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isPending}>
                {isPending ? "Creating..." : "Create Dispenser"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
