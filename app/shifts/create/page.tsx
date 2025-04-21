// app/(dashboard)/shifts/create/page.tsx
import { CreateShiftForm } from "@/components/shifts/CreateShiftForm";

export default function CreateShiftPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Create New Shift</h1>
      <CreateShiftForm />
    </div>
  );
}
