// app/(dashboard)/shifts/create/page.tsx
import { CreateShiftForm } from "@/components/shifts/CreateShiftForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CreateShiftPage() {
  return (
    <div className="conatiner mx-auto py-10">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Create New Shift
          </CardTitle>
          <CardDescription>Add a new Shift to your petrol pump</CardDescription>
        </CardHeader>
        <CardContent  className="space-y-6 mb-4">
        <CreateShiftForm />
        </CardContent>
      </Card>
    </div>
  );
}
