//Wide layout
import { lazy, memo, ReactNode, Suspense, useContext } from "react";
import { styled } from "@mui/material/styles";
import { DefaultLayoutConfigType } from "configs/layoutConfig";
import { selectCurrentLayout } from "store/slices/settingSlice/settingSlice";
import { useAppSelector } from "store/hooks";
import { AppContext } from "AppProvider";

const Root = styled("div")(
  ({ config }: { config: DefaultLayoutConfigType }) => ({
    ...(config.mode === "container" && {
      "& .container": {
        maxWidth: `${config.containerWidth}px`,
        width: "100%",
        margin: "0 auto",
      },
    }),
  })
);

type DefaultLayoutProps = {
  children?: ReactNode;
};

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children } = props;
  const config = useAppSelector(selectCurrentLayout) as DefaultLayoutConfigType;
  const { routes } = useContext(AppContext);

  return (
    <Root className="col-blue" config={config}>
      hi hello
    </Root>
  );
};

export default DefaultLayout;
