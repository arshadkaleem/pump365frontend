"use client";

import { useMutation } from "@tanstack/react-query";
import { PetrolPumpFormValues } from "@/schema/petrolPumpSchema";
import { api } from "@/api/api";
import { PetrolPumpForm } from "@/components/petrol-pump/PetrolPumpForm";
import { toast } from "sonner";

export default function CreatePetrolPumpPage() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: PetrolPumpFormValues) => {
      return api.pumpCreate(data);
    },
    onSuccess: () => {
      toast.success("Petrol pump created successfully!");
    },
    onError: () => {
      toast.error("Failed to create petrol pump.");
    },
  });

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Create New Petrol Pump</h2>
      <PetrolPumpForm onSubmit={(data) => mutateAsync(data)} />
      {isPending && (
        <p className="text-sm text-muted-foreground mt-2">Submitting...</p>
      )}
    </div>
  );
}
