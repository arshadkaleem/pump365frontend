// hooks/useShifts.ts
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/api";

export const useShifts = (petrolPumpId: string) => {
  return useQuery({
    queryKey: ["shifts", petrolPumpId],
    queryFn: async () => {
      const res = await api.shiftShiftsList(petrolPumpId);
      return res.data?.data || []; // fallback to empty array
    },
  });
};
