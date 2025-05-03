"use client";
import { ShiftTable } from "@/components/shifts/ShiftTable";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/store/userStore";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function ShiftListPage() {
  const PETROL_PUMP_ID = useUserStore((state) => state.petrolPumpId) ?? "";
  return (
    <>
      <div className="m-4 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Shifts</h1>
            <p className="text-muted-foreground">Manage your shifts</p>
          </div>
          <Link href="/shifts/create">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span>Add Shift</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="space-y-4 p-4">
      <ShiftTable petrolPumpId={PETROL_PUMP_ID} />
      </div>
    </>
  );
}
