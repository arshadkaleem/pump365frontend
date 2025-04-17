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
    const role = getUserRole();

    if (!role || !allowedRoles.includes(role)) {
      router.replace("/unauthorized"); // ⛔ redirect to access-denied page
    }
  }, [router]);

  return <>{children}</>;
}
