import { useEffect, memo, ReactNode, useContext } from "react";
import { styled } from "@mui/material/styles";
import { Layout1ConfigType } from "configs/layoutConfig";
import { useAppDispatch, useAppSelector } from "configs/hooks";
import {
  selectCurrentLayout,
  changeLayout,
} from "store/globalSlices/settingSlice";
import { AppContext } from "../../../AppProvider";
import { useRoutes } from "react-router-dom";
import Header from "main/components/header";
import CustomSuspense from "configs/utils/CustomSuspense";
import NavBar from "main/components/navBar";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

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
  const theme = useTheme();
  const hidden = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (hidden) {
      if (config.navbar.open) {
        dispatch(
          changeLayout({
            navbar: {
              ...config.navbar,
              open: !config.navbar.open,
            },
          })
        );
      }
    }
  }, [hidden]);

  return (
    <Root className="flex w-full" config={config}>
      <div className="flex min-w-0 flex-auto">
        {config.navbar.display && config.navbar.position === "left" && (
          <NavBar />
        )}
        <main
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
        {config.navbar.display && config.navbar.position === "right" && (
          <NavBar />
        )}
      </div>
    </Root>
  );
};

export default memo(Layout1);
