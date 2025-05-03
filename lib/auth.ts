import { jwtDecode } from "jwt-decode";

type UserRole = "Admin" | "Manager" | "Employee" | "Attendant" | null;

export function getUserRole(): UserRole {
  if (typeof window === "undefined") return null;

  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded: Record<string, string> = jwtDecode(token);
    const role =
      decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] ||
      null;
    return role as UserRole;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
}
