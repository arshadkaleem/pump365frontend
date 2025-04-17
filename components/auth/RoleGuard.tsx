"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUserRole } from "@/lib/auth";

export default function RoleGuard({
  allowedRoles,
  children,
}: {
  allowedRoles: string[];
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
   

    if (!token) {
      router.replace("/auth/login"); // 🔐 Not logged in
      return;
    }

    const role = getUserRole();
    
    if (!role || !allowedRoles.includes(role)) {
      router.replace("/unauthorized"); // 🔐 Not authorized
    }

    


  }, [router, allowedRoles]);

  return <>{children}</>;
}
