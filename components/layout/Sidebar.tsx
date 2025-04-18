"use client";

import { useUserStore } from "@/store/userStore";
import { sidebarMenuByRole } from "@/config/sidebarConfig";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { LogOut } from "lucide-react";
import { deleteCookie } from "cookies-next";
import Image from "next/image";
export default function Sidebar() {
  const role = useUserStore((state) => state.role);
  const email = useUserStore((state) => state.email);
  const pathname = usePathname();
  const router = useRouter();

  const menu = sidebarMenuByRole[role || ""] || [];

  const handleLogout = () => {
    useUserStore.getState().clearUser();
    localStorage.removeItem("token");
    deleteCookie("token");
    router.push("/auth/login");
  };

  return (
    <aside className="w-64 h-screen flex flex-col border-r bg-white">
      {/* Top Logo + Role */}
      <div className="p-4 border-b flex items-center gap-3">
        <Image
          src="/images/logo.png"
          alt="Pump360 Logo"
          width={42}
          height={42}
          className="rounded-full"
        />
        <span className="text-lg font-semibold">Pump 360</span>
      </div>

      {/* Menu */}
      <ScrollArea className="flex-1 p-2">
        <nav className="space-y-1">
          {menu.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-muted text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="border-t p-4 text-sm text-muted-foreground">
        <p className="font-medium">{email}</p>
        <p className="text-xs capitalize mb-3">{role}</p>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm font-medium text-red-600 hover:underline transition"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
}
