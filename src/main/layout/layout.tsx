import { useEffect, memo, ReactNode, useContext } from "react";
import { styled } from "@mui/material/styles";
import { LayoutConfigType } from "configs/layoutConfig";
import { useAppDispatch, useAppSelector } from "configs/hooks";
import {
  selectCurrentLayout,
  changeLayout,
} from "store/globalSlices/settingSlice";
import { AppContext } from "../../AppProvider";
import { useRoutes } from "react-router-dom";
import Header from "main/components/header";
import CustomSuspense from "configs/utils/CustomSuspense";
import NavBar from "main/components/navBar";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SidePanelProvider from "configs/utils/SidePanelProvider";
import SidePanel from "main/components/sidePanel";

const Root = styled("div")(({ config }: { config: LayoutConfigType }) => ({
  "& .container": {
    maxWidth: `${config.containerWidth}px`,
    width: "100%",
    margin: "0 auto",
  },
}));

const Layout = () => {
  const config = useAppSelector(selectCurrentLayout);
  const { routes } = useContext(AppContext);
  const theme = useTheme();
  const hidden = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      changeLayout({
        navbar: {
          open: !config.navbar.open,
        },
      })
    );
  }, [hidden]);

  return (
    <Root className="flex w-full" config={config}>
      <div className="flex min-w-0 flex-auto">
        {config.navbar.display && config.navbar.position === "left" && (
          <NavBar />
        )}
        <main className="relative z-10 flex min-h-full min-w-0 flex-auto flex-col">
          {config.header.display && <Header className={"sticky top-0"} />}
          {config.sidepanel.open && (
            <SidePanelProvider>
              <SidePanel />
            </SidePanelProvider>
          )}
          <div className="relative z-10 flex min-h-0 flex-auto flex-col">
              <CustomSuspense>{useRoutes(routes)}</CustomSuspense>
          </div>
        </main>
        {config.navbar.display && config.navbar.position === "right" && (
          <NavBar />
        )}
      </div>
    </Root>
  );
};

export default memo(Layout);
