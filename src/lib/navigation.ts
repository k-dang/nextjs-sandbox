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
      url: "/",
      items: [
        {
          title: "Static Rendering",
          url: "/static",
          isActive: true,
        },
        {
          title: "Dynamic Rendering",
          url: "/dynamic",
        },
      ],
    },
  ],
};
