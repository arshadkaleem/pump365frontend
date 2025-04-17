"use client";

import { useMutation } from "@tanstack/react-query";
import { LoginFormValues } from "@/schema/loginSchema";
import { LoginForm } from "@/components/auth/LoginForm";
import { api } from "@/api/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
export default function LoginPage() {
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (credentials: LoginFormValues) => {
      const response = await api.authLoginCreate(credentials);
      return response;
    },
    onSuccess: (response) => {
      const token = response.data.token;
      localStorage.setItem("token", token); // 🔐 store JWT
      // 🔐 store in cookie for middleware access
      setCookie("token", token);

      toast.success("Login successful");
      router.push("/dashboard"); // ✅ redirect after login
    },
    onError: () => {
      toast.error("Invalid email or password");
    },
  });

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded-md shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <LoginForm onSubmit={(data) => mutateAsync(data)} />
      {isPending && (
        <p className="text-sm text-muted-foreground mt-2">Logging in...</p>
      )}
    </div>
  );
}
