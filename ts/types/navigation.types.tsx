export type Navigation = {
  label: string;
  type: string;
  data: NavigationData;
  children?: Navigation[];
};

export type NavigationData = {
  url: string;
};
