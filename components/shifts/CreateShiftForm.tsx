"use client";

// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { shiftSchema, ShiftFormValues } from "@/schema/shift";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/api/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function CreateShiftForm() {
  const router = useRouter();
  const form = useForm<ShiftFormValues>({
    resolver: zodResolver(shiftSchema),
    defaultValues: {
      shiftNumber: 1,
      startTime: "",
      endTime: "",
      shiftDuration: 1,
    },
  });

  const watchStartTime = form.watch("startTime");
  const watchEndTime = form.watch("endTime");

  useEffect(() => {
    if (watchStartTime && watchEndTime) {
      const [startHour, startMinute] = watchStartTime.split(":").map(Number);
      const [endHour, endMinute] = watchEndTime.split(":").map(Number);
  
      if (
        !isNaN(startHour) &&
        !isNaN(startMinute) &&
        !isNaN(endHour) &&
        !isNaN(endMinute)
      ) {
        const start = startHour * 60 + startMinute;
        const end = endHour * 60 + endMinute;
  
        let durationInMinutes = end - start;
        if (durationInMinutes < 0) durationInMinutes += 1440; // overnight shift
  
        const durationInHours = parseFloat((durationInMinutes / 60).toFixed(2));
        form.setValue("shiftDuration", durationInHours);
      }
    }
  }, [watchStartTime, watchEndTime, form]);
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (values: ShiftFormValues) => {
      return await api.shiftCreate(values)
    },
    onSuccess: () => {
      toast.success("Shift created successfully!");
      form.reset({
        shiftNumber: 1,
        startTime: "",
        endTime: "",
        shiftDuration: 1,
      });
    },
    onError: () => {
      toast.error("Failed to create shift.");
    },
  });

  const onSubmit = (values: ShiftFormValues) => {
    console.log("Form data before submit:", form.getValues());
    mutateAsync(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-md  mx-auto p-4 "
      >
        <FormField
          control={form.control}
          name="shiftNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shift Number</FormLabel>
              <FormControl>
                <Input type="number" {...field}  onChange={(e) => field.onChange(Number(e.target.value))}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Time</FormLabel>
              <FormControl>
                <Input placeholder="HH:mm" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="endTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>End Time</FormLabel>
              <FormControl>
                <Input placeholder="HH:mm" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="shiftDuration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shift Duration (in Hr)</FormLabel>
              <FormControl>
                <Input type="number" {...field}  onChange={(e) => field.onChange(Number(e.target.value))}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
        <Button
            type="button"
            variant={"outline"}
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Creating..." : "Create Shift"}
          </Button>
          
        </div>
      </form>
    </Form>
  );
}
