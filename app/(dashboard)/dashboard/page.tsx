import RoleGuard from "@/components/auth/RoleGuard";

export default function DashboardPage() {
  return (
    <RoleGuard allowedRoles={["Admin", "Manager"]}>
      <div className="p-4">Welcome to the admin dashboard</div>
    </RoleGuard>
  );
}
