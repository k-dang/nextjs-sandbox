"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { navData, NavSection } from "./nav-links";

function findBreadCrumb(navMain: NavSection[], path: string) {
  for (const nav of navMain) {
    if (nav.url === path) {
      return { parent: nav, child: null };
    }

    for (const item of nav.items || []) {
      if (item.url === path) {
        return { parent: nav, child: item };
      }
    }
  }

  return {};
}

export function NavBreadcrumb() {
  const pathname = usePathname();
  const { parent, child } = findBreadCrumb(navData.navMain, pathname);

  if (!parent) {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href={parent.url}>{parent?.title}</BreadcrumbLink>
        </BreadcrumbItem>
        {child != null && (
          <>
            <BreadcrumbSeparator className="hidden md:block" />{" "}
            <BreadcrumbItem>
              <BreadcrumbPage>{child.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
