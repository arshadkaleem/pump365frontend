"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { api } from "@/api/api";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type NozzleCreateForm, nozzleSchema } from "@/schema/nozzle/nozzleSchema";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/userStore";
import { useEffect, useState } from "react";
import { FuelTankDto } from "@/type/data-contracts";

export function AddNozzleDialog({
  fuelDispenserUnitId,
  dispenserNumber,
}: {
  fuelDispenserUnitId: string;
  dispenserNumber: number;
}) {
  const router = useRouter();
  const petrolPumpId = useUserStore((state) => state.petrolPumpId);
  const [filteredFuelTanks, setFilteredFuelTanks] = useState<FuelTankDto[]>([]);

  const form = useForm<NozzleCreateForm>({
    resolver: zodResolver(nozzleSchema),
    defaultValues: {
      petrolPumpId: petrolPumpId || "",
      nozzleNumber: 0,
      fuelType: "",
      dispenserNumber,
      lastCalibrationDate: new Date().toISOString(),
      fuelDispenserUnitId: fuelDispenserUnitId || "",
      fuelTankId: "",
      status: "Active",
    },
  });

  const { data: fuelTanks } = useQuery({
    queryKey: ["fuelTanks"],
    queryFn: async () => (await api.fuelTankList()).data.data,
  });

  const selectedFuelType = form.watch("fuelType")?.toLowerCase().trim();

  useEffect(() => {
    const matched = fuelTanks?.filter(
      (tank: { fuelType: string; }) => tank.fuelType?.toLowerCase().trim() === selectedFuelType
    );
    setFilteredFuelTanks(matched || []);
  }, [selectedFuelType, fuelTanks]);

  const normalizeDate = (date: Date) => {
    const localDate = new Date(date);
    localDate.setHours(0, 0, 0, 0);
    return localDate.toISOString();
  };
  const [isOpen, setIsOpen] = useState(false);
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (values: NozzleCreateForm) => {
      const payload = {
        ...values,
        lastCalibrationDate: values.lastCalibrationDate
        ? normalizeDate(new Date(values.lastCalibrationDate))
        : null,
      };
      return api.nozzleCreate(payload);
    },
    onSuccess: () => {
      toast.success("Nozzle created successfully!");
      form.reset();
      setIsOpen(false);  // Close the modal
      router.push(`/dispensers/${fuelDispenserUnitId}/nozzle`);
    },
    onError: () => toast.error("Failed to create nozzle."),
  });

  const onSubmit = (values: NozzleCreateForm) => mutateAsync(values);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>Add Nozzle</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Nozzle</DialogTitle>
          <DialogDescription>
            Add a new nozzle here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4">
            <FormField
              control={form.control}
              name="nozzleNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nozzle Number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dispenserNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dispenser Number</FormLabel>
                  <FormControl>
                    <Input type="number" disabled {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fuelType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fuel Type</FormLabel>
                  <FormControl>
                    <Input placeholder="Fuel Type" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4 flex-wrap ">
              <FormField
                control={form.control}
                name="fuelTankId"
                render={({ field }) => {
                  const isDisabled = !selectedFuelType;

                  return (
                    <FormItem>
                      <FormLabel>Fuel Tank</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={isDisabled}
                      >
                        <FormControl>
                          <SelectTrigger
                            className={cn(
                              "h-10 px-3 border rounded-md",
                              isDisabled
                                ? "cursor-not-allowed opacity-60 bg-gray-100"
                                : "focus:ring-2 focus:ring-primary"
                            )}
                          >
                            <SelectValue placeholder="Select a fuel tank" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="z-50 bg-white">
                          {filteredFuelTanks.length > 0 ? (
                            filteredFuelTanks.map((tank) => (
                              <SelectItem
                                key={tank.fuelTankId}
                                value={tank.fuelTankId || ""}
                              >
                                {tank.fuelType} - {tank.capacityInLiters}L
                              </SelectItem>
                            ))
                          ) : (
                            <div className="text-muted-foreground px-3 py-2 text-sm">
                              No matching fuel tanks
                            </div>
                          )}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

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

              <FormField
                control={form.control}
                name="lastCalibrationDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Last Calibration Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(new Date(field.value), "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value ? new Date(field.value) : undefined}
                          onSelect={(date) =>
                            field.onChange(date?.toISOString() || new Date().toISOString())
                          }
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Hidden Fields */}
            {["petrolPumpId", "fuelDispenserUnitId"].map((name) => (
              <FormField
                key={name}
                control={form.control}
                name={name as keyof NozzleCreateForm}
                render={({ field }) => (
                  <FormItem className="hidden">
                    <FormControl>
                      <Input {...field} value={field.value ?? ""} hidden />
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}

            <DialogFooter className="w-full ">
              <Button type="submit" disabled={isPending} className="w-full">
                {isPending ? "Creating..." : "Create Nozzle"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}