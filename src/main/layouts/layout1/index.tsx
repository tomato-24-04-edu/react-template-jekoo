//Wide layout
import { lazy, memo, ReactNode, Suspense, useContext } from "react";
import { styled } from "@mui/material/styles";
import { Layout1ConfigDefaultsType } from "configs/layoutConfig";
import { selectCurrentLayout } from "store/slices/settingSlice/settingSlice";
import { useAppSelector } from "store/hooks";

const Root = styled("div")(
  ({ config }: { config: Layout1ConfigDefaultsType }) => ({
    ...(config.mode === "boxed" && {
      clipPath: "inset(0)",
      maxWidth: `${config.containerWidth}px`,
      margin: "0 auto",
      boxShadow:
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    }),
    ...(config.mode === "container" && {
      "& .container": {
        maxWidth: `${config.containerWidth}px`,
        width: "100%",
        margin: "0 auto",
      },
    }),
  })
);

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
