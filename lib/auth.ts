import { jwtDecode } from "jwt-decode";

export interface DecodedToken {
  email: string;
  role: "Admin" | "Manager" | "Employee" | "Attendant";
  exp: number;
}

export function getUserRole(): DecodedToken["role"] | null {
  if (typeof window === "undefined") return null;

  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return decoded.role;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
}
