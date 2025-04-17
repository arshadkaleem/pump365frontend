import { jwtDecode } from "jwt-decode";

export function getUserRole():
  | "Admin"
  | "Manager"
  | "Employee"
  | "Attendant"
  | null {
  if (typeof window === "undefined") return null;

  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded: any = jwtDecode(token);
    const role =
      decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    return role ?? null;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
}
