export interface Route {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: Route[];
}

export interface Routes {
  Home: string;
  Profile: string;
  Settings: string;
}
