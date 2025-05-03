import { EmployeeUpdateForm } from "@/components/employee/EmployeeUpdateForm";

export default function EditEmployeePage({
  params,
}: {
  params: { id: string };
}) {
  // You may fetch employee data via `api.employeeDetail(id)`
  const defaultValues = {
    petrolPumpId: "pump-id",
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: "********",
    role: "Manager",
    hireDate: new Date().toISOString(),
    phoneNumber: "9876543210",
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6">Update Employee</h2>
      <EmployeeUpdateForm
        employeeId={params.id}
        defaultValues={defaultValues}
      />
    </div>
  );
}
