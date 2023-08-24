import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
import "./Root.scss";

export const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
