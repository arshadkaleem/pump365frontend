"use client";

import { useMutation } from "@tanstack/react-query";
import { PetrolPumpFormValues } from "@/schema/pump/petrolPumpSchema";
import { api } from "@/api/api";
import { PetrolPumpForm } from "@/components/petrol-pump/PetrolPumpForm";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CreatePetrolPumpPage() {
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: PetrolPumpFormValues) => {
      return api.pumpCreate(data);
    },
    onSuccess: () => {
      toast.success("Petrol pump created successfully!");
      router.push("/auth/login");
    },
    onError: () => {
      toast.error("Failed to create petrol pump.");
    },
  });

  return (
    <div className="max-w-4xl mx-auto my-5 p-0">
      <PetrolPumpForm onSubmit={(data) => mutateAsync(data)} />
      {isPending && (
        <p className="text-sm text-muted-foreground mt-2">Submitting...</p>
      )}
    </div>
  );
}
