import {
  BarChart3,
  Users,
  CalendarClock,
  Droplet,
  Gauge,
  ShoppingCart,
  ClipboardList,
  Settings,
  CreditCard,
  Car,
  UserCircle,
  Receipt,
  Fuel,
} from "lucide-react";

export type SidebarItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

export const sidebarMenuByRole: Record<string, SidebarItem[]> = {
  Manager: [
    { label: "Dashboard", href: "/dashboard", icon: BarChart3 },
    { label: "Fuel Tanks", href: "/fuel-tanks", icon: Droplet },
    { label: "Dispensers", href: "/dispensers", icon: Gauge },
    { label: "Nozzles", href: "/nozzles", icon: Fuel },
    { label: "Employees", href: "/employees", icon: Users },
    { label: "Assignments", href: "/assignments", icon: ClipboardList },
    { label: "Shifts", href: "/shifts", icon: CalendarClock },
    { label: "Pricing", href: "/pricing", icon: CreditCard },
    { label: "Inventory", href: "/inventory", icon: ShoppingCart },
    { label: "Customers", href: "/customers", icon: UserCircle },
    { label: "Transactions", href: "/transactions", icon: Receipt },
    { label: "Vehicle Transactions", href: "/vehicle-transactions", icon: Car },
    { label: "Reports", href: "/reports", icon: BarChart3 },
    { label: "Pump", href: "/pump", icon: Gauge },
    { label: "Settings", href: "/settings", icon: Settings },
  ],
  // Add other roles as needed...
};
