import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="p-6">Welcome to your Dashboard</div>
    </ProtectedRoute>
  );
}
