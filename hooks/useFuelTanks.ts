// lib/hooks/useFuelTanks.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api"; // Using the existing API instance

import {
  FuelTank,
  FuelTankCreate,
  FuelTankUpdate,
  FuelTankStockAdjustment,
} from "@/schema/fuel-tank"; // Importing the types from the schema
import { useUserStore } from "@/store/userStore";
import { toast } from "sonner";

// Query key for fuel tanks
export const fuelTankKeys = {
  all: ["fuel-tanks"] as const,
  lists: () => [...fuelTankKeys.all, "list"] as const,
  list: (filters: any) => [...fuelTankKeys.lists(), filters] as const,
  details: () => [...fuelTankKeys.all, "detail"] as const,
  detail: (id: string) => [...fuelTankKeys.details(), id] as const,
};

// Hook for fetching all fuel tanks
export const useFuelTanks = () => {
  const petrolPumpId = useUserStore((state) => state.petrolPumpId);

  return useQuery({
    queryKey: fuelTankKeys.lists(),
    queryFn: async () => {
      const response = await api.fuelTankList();
      return response.data.data; // ✅ This accesses the actual T payload
    },
    enabled: !!petrolPumpId,
  });

  // return useQuery({
  //   queryKey: fuelTankKeys.lists(),
  //   queryFn: async () => {
  //     const response = await api.fuelTankList();

  //     return response.data;
  //   },
  //   enabled: !!petrolPumpId,
  // });
};

// Hook for fetching a single fuel tank by ID
export const useFuelTankById = (id: string) => {
  return useQuery({
    queryKey: fuelTankKeys.detail(id),
    queryFn: async () => {
      const response = await api.fuelTankDetail(id);
      return response.data;
    },
    enabled: !!id,
  });
};

// Hook for fetching fuel tanks by fuel type
export const useFuelTanksByType = (fuelType: string) => {
  return useQuery({
    queryKey: [...fuelTankKeys.lists(), fuelType],
    queryFn: async () => {
      const response = await api.fuelTankByTypeDetail(fuelType);
      return response.data;
    },
    enabled: !!fuelType,
  });
};

// Hook for creating a fuel tank
export const useCreateFuelTank = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: FuelTankCreate) => {
      const response = await api.fuelTankCreate(data);
      if (!response.data) {
        throw new Error("Failed to create fuel tank");
      }
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: fuelTankKeys.lists() });
      toast.success("Fuel tank created successfully");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to create fuel tank");
    },
  });
};

// Hook for updating a fuel tank
export const useUpdateFuelTank = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: FuelTankUpdate }) => {
      const response = await api.fuelTankUpdate(id, data);
      return response.data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: fuelTankKeys.detail(variables.id),
      });
      queryClient.invalidateQueries({ queryKey: fuelTankKeys.lists() });
      toast.success("Fuel tank updated successfully");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to update fuel tank");
    },
  });
};

// Hook for deleting a fuel tank
export const useDeleteFuelTank = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const response = await api.fuelTankDelete(id);
      return response.data;
    },
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: fuelTankKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: fuelTankKeys.lists() });
      toast.success("Fuel tank deleted successfully");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to delete fuel tank");
    },
  });
};

// Hook for adjusting fuel tank stock
export const useAdjustFuelTankStock = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: FuelTankStockAdjustment) => {
      const response = await api.fuelTankAdjustStockCreate(data);
      if (!response.data) {
        throw new Error("Failed to adjust stock");
      }
      return response.data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: fuelTankKeys.detail(variables.fuelTankId),
      });
      queryClient.invalidateQueries({ queryKey: fuelTankKeys.lists() });
      toast.success("Stock adjusted successfully");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to adjust stock");
    },
  });
};
