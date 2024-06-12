//Wide layout
import { lazy, memo, ReactNode, Suspense, useContext } from "react";
import { styled } from "@mui/material/styles";
import { DefaultLayoutConfig } from "configs/layoutConfig";
import { selectCurrentLayout } from "store/slices/settingSlice/settingSlice";
import { useAppSelector } from "store/hooks";

const Root = styled("div")(({ config }: { config: DefaultLayoutConfig }) => ({
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
  const config = useAppSelector(
    selectCurrentLayout
  ) as Layout1ConfigDefaultsType;
  // const appContext = useContext(AppContext);
  // const { routes } = appContext;

  return <div></div>;
};

export default Layout1;
