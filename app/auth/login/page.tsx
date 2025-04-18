"use client";

import { useMutation } from "@tanstack/react-query";
import { LoginFormValues } from "@/schema/loginSchema";
import { LoginForm } from "@/components/auth/LoginForm";
import { api } from "@/api/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { useUserStore } from "@/store/userStore";

export default function LoginPage() {
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (credentials: LoginFormValues) => {
      const response = await api.authLoginCreate(credentials);
      return response;
    },
    onSuccess: (response) => {
      const token = response.data.token!;
      localStorage.setItem("token", token);
      setCookie("token", token);

      const decoded: any = jwtDecode(token);
      console.log("DECODED TOKEN", decoded);

      const role =
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

      const isProfileComplete = decoded.isPetrolPumpDetailComplete === "true";

      useUserStore.getState().setUser({
        role,
        email:
          decoded[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
          ],
        petrolPumpId: decoded.petrolPumpId,
        isProfileComplete, // ✅ store it
      });

      toast.success("Login successful");

      // ✅ Manager check + redirect
      if (role === "Manager" && !isProfileComplete) {
        router.push("/update-pump");
        return;
      }

      switch (role) {
        case "Admin":
          router.push("/admin");
          break;
        case "Manager":
          router.push("/dashboard");
          break;
        case "Employee":
          router.push("/sales");
          break;
        case "Attendant":
          router.push("/readings");
          break;
        default:
          router.push("/unauthorized");
          break;
      }
    },
    onError: () => {
      toast.error("Invalid email or password");
    },
  });

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <LoginForm onSubmit={mutateAsync} isPending={isPending} />
    </main>
  );
}
