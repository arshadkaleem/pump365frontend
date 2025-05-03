// CreateDispenserDialogContent.tsx
"use client";

import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dispenserSchema, DispenserFormValues } from "@/schema/dispenserSchema";
import { api } from "@/api/api";
import { Button } from "@/components/ui/button";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CreateDispenserDialogContent() {
  const router = useRouter();

  const form = useForm<DispenserFormValues>({
    resolver: zodResolver(dispenserSchema),
    defaultValues: {
      dispenserNumber: 1,
      status: "Active",
      numberOfNozzles: 0,
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: DispenserFormValues) =>
      api.fuelDispenserCreate({
        dispenserNumber: data.dispenserNumber,
        status: data.status,
        numberOfNozzles: data.numberOfNozzles,
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
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Fuel Dispenser</Button>
        </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Fuel Dispenser</DialogTitle>
          <DialogDescription>
            add new fuel dispenser to your pump
          </DialogDescription>
        </DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
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
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="numberOfNozzles"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Nozzles</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min={1}
                            max={100}
                            {...field}
                            onChange={(e) =>
                              field.onChange(Number(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Active">Active</SelectItem>
                            <SelectItem value="Inactive">Inactive</SelectItem>
                            <SelectItem value="Maintenance">
                              Maintenance
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogFooter>
                    <Button type="submit" disabled={isPending}>
                      {isPending ? "Creating..." : "Create Dispenser"}
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
      </DialogContent>
    </Dialog>
  );
}
