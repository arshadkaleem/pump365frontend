"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { shiftSchema, ShiftFormValues } from "@/schema/shift";
import { z } from "zod";
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

export function CreateShiftForm() {
  const form = useForm<ShiftFormValues>({
    resolver: zodResolver(shiftSchema),
    defaultValues: {
      shiftNumber: 1,
      startTime: "",
      endTime: "",
      shiftDuration: 0,
    },
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (values: ShiftFormValues) => {
      return await api.shiftCreate(values);
    },
    onSuccess: () => {
      toast.success("Shift created successfully!");
      form.reset();
    },
    onError: () => {
      toast.error("Failed to create shift.");
    },
  });

  const onSubmit = (values: ShiftFormValues) => {
    mutateAsync(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-md mx-auto p-4 bg-white rounded shadow"
      >
        <FormField
          control={form.control}
          name="shiftNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Shift Number</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
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
              <FormLabel>Shift Duration (in mins)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Creating..." : "Create Shift"}
        </Button>
      </form>
    </Form>
  );
}
