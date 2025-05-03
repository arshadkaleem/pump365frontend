//hooks/useFuelDispenser.ts

import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/api";
import { FuelDispenserUnitDto } from "@/type/data-contracts";

export const useFuelDispenserList=()=> {

    return useQuery<FuelDispenserUnitDto[]>({
        queryKey: ["dispensers"],
        queryFn: async () => {
          const response = await api.fuelDispenserList();
          console.log("Fetched Dispensers:", response.data);
          return response.data;
        },
      });
}