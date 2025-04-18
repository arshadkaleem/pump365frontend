import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  role: string | null;
  email: string | null;
  petrolPumpId: string | null;
  isProfileComplete: boolean;
  hasHydrated: boolean;
  setUser: (data: {
    role: string;
    email: string;
    petrolPumpId: string;
    isProfileComplete: boolean;
  }) => void;
  clearUser: () => void;
  setHydrated: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      role: null,
      email: null,
      petrolPumpId: null,
      isProfileComplete: true,
      hasHydrated: false,
      setUser: (data) => set({ ...data }),
      clearUser: () =>
        set({
          role: null,
          email: null,
          petrolPumpId: null,
          isProfileComplete: true,
        }),
      setHydrated: () => set({ hasHydrated: true }),
    }),
    {
      name: "user-store",
      onRehydrateStorage: () => () => {
        useUserStore.getState().setHydrated();
      },
    }
  )
);

// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// interface UserState {
//   role: string | null;
//   email: string | null;
//   petrolPumpId: string | null;
//   isProfileComplete: boolean;
//   setUser: (data: {
//     role: string;
//     email: string;
//     petrolPumpId: string;
//     isProfileComplete: boolean;
//   }) => void;
//   clearUser: () => void;
// }

// export const useUserStore = create<UserState>()(
//   persist(
//     (set) => ({
//       role: null,
//       email: null,
//       petrolPumpId: null,
//       isProfileComplete: true,
//       setUser: (data) => set({ ...data }),
//       clearUser: () =>
//         set({
//           role: null,
//           email: null,
//           petrolPumpId: null,
//           isProfileComplete: true,
//         }),
//     }),
//     {
//       name: "user-store", // Key in localStorage
//     }
//   )
// );
