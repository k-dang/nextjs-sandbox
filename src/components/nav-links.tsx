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

const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "/",
      items: [
        {
          title: "Home",
          url: "/",
        },
        {
          title: "Dashboard",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "Building Your Application",
      url: "/page",
      items: [
        {
          title: "Page",
          url: "/page",
        },
      ],
    },
  ],
};

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {data.navMain.map((item) => (
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
