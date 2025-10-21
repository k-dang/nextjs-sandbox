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
          title: "Static Rendering",
          url: "/static",
        },
        {
          title: "Dynamic Rendering",
          url: "/dynamic",
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
