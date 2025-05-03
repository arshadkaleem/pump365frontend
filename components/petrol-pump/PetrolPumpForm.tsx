"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  petrolPumpSchema,
  PetrolPumpFormValues,
} from "@/schema/pump/petrolPumpSchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ClipboardPaste, LogInIcon } from "lucide-react";

export function PetrolPumpForm({
  onSubmit,
}: {
  onSubmit: (data: PetrolPumpFormValues) => void;
}) {
  const form = useForm<PetrolPumpFormValues>({
    resolver: zodResolver(petrolPumpSchema),
    defaultValues: {
      name: "",
      licenseNumber: "",
      companyName: "",
      contactNumber: "",
      email: "",
      password: "",
      SAPNo: "",
    },
  });

  return (
    <Card className="w-full max-w-6xl p-0 shadow-2xl border flex flex-col md:flex-row overflow-hidden rounded-2xl">
      {/* Left Side */}
      <div className="hidden md:flex flex-col justify-between text-black w-1/2 p-8">
        <CardTitle className="text-2xl font-semibold">
          Register Your Pump
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Fill in the details below to create your account
        </CardDescription>

        <div className="flex flex-1 justify-center items-center">
          <Image
            src="/images/logo.png"
            alt="Pump360"
            width={400}
            height={400}
            className="rounded-xl"
            priority
          />
        </div>

        <div className="space-y-2 text-center">
          <p className="text-sm font-medium">Already have an account?</p>
          <CardFooter className="justify-center">
            <Link
              href="/auth/login"
              className="flex items-center gap-1 text-xs text-black/80 hover:text-black transition"
            >
              <LogInIcon className="w-4 h-4" />
              Login
            </Link>
          </CardFooter>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 p-6 md:p-10 bg-white">
        <CardHeader className="p-0 mb-4" />

        <CardContent className="p-0">
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter full name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="licenseNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>License Number</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value ?? ""} placeholder="Enter license number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value ?? ""} placeholder="Enter company name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactNumber"
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
            control={form.control}
            name="SAPNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>SAP Number</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Enter SAP number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} placeholder="Enter email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} placeholder="Enter password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-4">
            Create Petrol Pump
            <ClipboardPaste className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </Form>
        </CardContent>
      </div>
    </Card>
  );
}
