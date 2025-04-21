"use client";

import { useUserStore } from "@/store/userStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UpdatePumpForm } from "@/components/petrol-pump/UpdatePumpForm";

export default function UpdatePumpPage() {
  const role = useUserStore((state) => state.role);
  const hasHydrated = useUserStore((state) => state.hasHydrated);
  const router = useRouter();

  useEffect(() => {
    if (!hasHydrated) return; // wait for Zustand to hydrate
    if (role !== "Manager") {
      router.replace("/unauthorized");
    }
  }, [hasHydrated, role, router]);

  return (
    <div className="p-6">
      <UpdatePumpForm />
    </div>
  );
}
