import { create } from "zustand";

interface UserState {
  role: string | null;
  email: string | null;
  petrolPumpId: string | null;
  setUser: (data: {
    role: string;
    email: string;
    petrolPumpId: string;
  }) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  role: null,
  email: null,
  petrolPumpId: null,
  setUser: (data) => set({ ...data }),
  clearUser: () => set({ role: null, email: null, petrolPumpId: null }),
}));
