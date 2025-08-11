"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "./ui/sidebar";

interface NavItem {
  title: string;
  url: string;
}

export interface NavSection {
  title: string;
  url: string;
  items?: NavItem[];
}

export interface NavData {
  navMain: NavSection[];
}

export const navData: NavData = {
  navMain: [
    {
      title: "Getting Started",
      url: "/",
      items: [
        {
          title: "PPR",
          url: "/ppr",
        },
        {
          title: "Dashboard",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "Building Your Application",
      url: "/build",
      items: [
        {
          title: "Routing",
          url: "/build/routing",
        },
      ],
    },
  ],
};

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {navData.navMain.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild>
            <Link href={item.url} prefetch={false} className="font-medium">
              {item.title}
            </Link>
          </SidebarMenuButton>
          {item.items?.length ? (
            <SidebarMenuSub>
              {item.items.map((item) => (
                <SidebarMenuSubItem key={item.title}>
                  <SidebarMenuSubButton
                    asChild
                    isActive={pathname === item.url}
                  >
                    <Link href={item.url} prefetch={false}>
                      {item.title}
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          ) : null}
        </SidebarMenuItem>
      ))}
    </>
  );
}
