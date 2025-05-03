"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/api/api";
import { toast } from "sonner";
import { EmployeeDto } from "@/type/data-contracts";
import { useRouter } from "next/navigation";

export function AssignEmpShift({
  shiftId,
  shiftNumber,
}: {
  shiftId: string;
  shiftNumber: number;
}) {
  const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);
const queryClient = useQueryClient()

  const router = useRouter();
  // Fetch all employees
  const fetchEmployees = async function () {
    const res = await api.employeeList();
    if (res.status !== 200) {
      toast.error("Failed to fetch employees");
      return []; // Return an empty array or handle the error as needed
    }

    return res.data.data; // return it for React Query to store in `data`
  };

  const { data, isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: fetchEmployees,
  });

  const handleToggle = (employeeId: string) => {
    setSelectedEmployees((prev) =>
      prev.includes(employeeId)
        ? prev.filter((id) => id !== employeeId)
        : [...prev, employeeId]
    );
  };
  const [isOpen, setIsOpen] = useState(false);
  // Mutation to assign employees to the shift
  const mutation = useMutation({
    mutationFn: async (employeeId: string) => {
      const assignedDate = new Date().toISOString();
      const isTransfer = true; 
  
      const payload = {
        employeeId,
        shiftId,
        assignedDate,
        isTransfer,
      };
  
      const res = await api.employeeShiftAssignCreate(payload);
      if (res.status !== 200) throw new Error("Assignment failed");
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["employees", shiftId]})
      toast.success("Employees assigned successfully!");
      setIsOpen(false); 
      router.push(`/shifts/${shiftId}/employees`)
      setSelectedEmployees([]);
    },
    onError: () => {
      toast.error("Something went wrong during assignment");
    },
  });

  const handleAssign=()=>{
    selectedEmployees.map(emp => {
        mutation.mutateAsync(emp)
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>Assign Employee</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Assign A New Employee</DialogTitle>
          <DialogDescription>
            Select employees to assign to Shift #{shiftNumber}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 max-h-64 overflow-y-auto px-2">
          {isLoading ? (
            <p>Loading employees...</p>
          ) : (
            data?.map((emp: EmployeeDto) => (
              <div  
                key={emp.employeeId}
                className="flex items-center gap-2 py-1"
              >
                <Checkbox
                  id={emp.employeeId}
                  checked={selectedEmployees.includes(emp.employeeId || " ")}
                  onCheckedChange={() => handleToggle(emp.employeeId || " ")}
                />
                <label htmlFor={emp.employeeId}>
                  {emp.fullName}
                </label>
              </div>
            ))
          )}
        </div>

        <DialogFooter>
          <Button
            onClick={handleAssign}
            disabled={selectedEmployees.length === 0 || mutation.isPending}
          >
            {mutation.isPending ? "Assigning..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
