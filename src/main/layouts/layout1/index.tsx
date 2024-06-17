//Wide layout
import { lazy, memo, ReactNode, Suspense, useContext ,useEffect} from "react";
import { styled } from "@mui/material/styles";
import { Layout1ConfigType } from "configs/layoutConfig";
import { selectCurrentLayout } from "store/globalSlices/settingSlice";
import { useAppSelector } from "store/hooks";
import { AppContext } from "../../../AppProvider";
import { useRoutes,useLocation } from "react-router-dom";

import Header from "main/components/header";
import CustomSuspense from "configs/utils/CustomSuspense";
import LeftSideBar from "main/components/leftSidebar";

const Root = styled("div")(({ config }: { config: Layout1ConfigType }) => ({
  ...(config.mode === "container" && {
    "& .container": {
      maxWidth: `${config.containerWidth}px`,
      width: "100%",
      margin: "0 auto",
    },
  }),
}));

type Layout1Props = {
  children?: ReactNode;
};

const Layout1 = (props: Layout1Props) => {
  const { children } = props;
  const config = useAppSelector(selectCurrentLayout) as Layout1ConfigType;
  const { routes } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    console.log("URL changed:", location.pathname);
  }, [location]);
  return (
    <Root className="flex w-full" config={config}>
      <div className="flex min-w-0 flex-auto">
        {config.navbar.display && config.navbar.position === "left" && (
          <LeftSideBar />
        )}
        <main
          id="fuse-main"
          className="relative z-10 flex min-h-full min-w-0 flex-auto flex-col"
        >
          {config.toolbar.display && (
            <Header
              className={config.toolbar.style === "fixed" ? "sticky top-0" : ""}
            />
          )}
          <div className="relative z-10 flex min-h-0 flex-auto flex-col">
            <CustomSuspense>{useRoutes(routes)}</CustomSuspense>
          </div>
        </main>
      </div>
    </Root>
  );
};

export default Layout1;
