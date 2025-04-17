"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormValues } from "@/schema/loginSchema";
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
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const LoginForm = ({
  onSubmit,
  isPending,
}: {
  onSubmit: (values: LoginFormValues) => void;
  isPending: boolean;
}) => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Card className="w-full max-w-md shadow-2xl border">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="/images/logo.png"
            alt="Pump360"
            className="w-24"
            width={120}
            height={120}
          />
        </div>
        <CardTitle className="text-2xl font-bold">Login to Pump360</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      {...field}
                    />
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
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <div className="text-sm text-center">
          <Link
            href="/forgot-password"
            className="text-blue-600 hover:text-blue-800"
          >
            Forgot your password?
          </Link>
        </div>
        <div className="text-sm text-center text-gray-500">
          New to Pump360? Contact your administrator to get access.
        </div>
      </CardFooter>
    </Card>
  );
};
