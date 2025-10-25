interface NavItem {
  title: string;
  url: string;
  isActive?: boolean;
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
      title: "Dashboard",
      url: "/dashboard",
      items: [
        {
          title: "Static Rendering",
          url: "/dashboard/static",
          isActive: true,
        },
        {
          title: "Dynamic Rendering",
          url: "/dashboard/dynamic",
        },
      ],
    },
    {
      title: "Building Your Application",
      url: "/dashboard/build",
      items: [
        {
          title: "Routing",
          url: "/dashboard/build/routing",
        },
      ],
    },
  ],
};
