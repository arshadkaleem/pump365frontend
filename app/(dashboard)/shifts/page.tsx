'use client';
import { ShiftTable } from "@/components/shifts/ShiftTable";
import { useUserStore } from "@/store/userStore";


export default function ShiftListPage() {
const PETROL_PUMP_ID = useUserStore((state) => state.petrolPumpId) ?? '';
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Shift List</h1>
      <ShiftTable petrolPumpId={PETROL_PUMP_ID} />
    </div>
  );
}
