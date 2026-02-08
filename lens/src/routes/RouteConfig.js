import { Root } from "../layout/Root";
import Loader from "../components/common/Loader";
import AuthPage from "../page/AuthPage";
import NearbyUsersPage from "../page/NearbyUsersPage";
export const PrivateRouteConfig = [
  {
    key: "Root",
    component: Root,
    path: "/",
    children: [
      {
        key: "AuthPage",
        path: "",
        component: AuthPage,
      },
      {
        key: "Loader",
        path: "",
        component: Loader,
      },
      {
        key: "NearbyUsers",
        path: "nearby",
        component: NearbyUsersPage,
      },
    ],
  },
];

export const PublicRouteConfig = [];
