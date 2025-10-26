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
      title: "Basics",
      url: "/",
      items: [
        {
          title: "Search Params",
          url: "/search-params",
        },
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
      title: "Auth",
      url: "/auth",
      items: [
        {
          title: "Clerk",
          url: "/clerk",
        }
      ]
    }
  ],
};
