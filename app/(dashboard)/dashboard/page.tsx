import RoleGuard from "@/components/auth/RoleGuard";

export default function DashboardPage() {
  return (
    <RoleGuard allowedRoles={["Admin", "Manager"]}>
      <div className="p-4">Welcome to the admin dashboard</div>
    </RoleGuard>
  );
}

// import ProtectedRoute from "@/components/auth/ProtectedRoute";

// export default function DashboardPage() {
//   return (
//     <ProtectedRoute>
//       <div className="p-6">Welcome to your Dashboard</div>
//     </ProtectedRoute>
//   );
// }
