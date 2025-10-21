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
          title: "Static",
          url: "/static",
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
