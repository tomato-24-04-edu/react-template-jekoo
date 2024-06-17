//Wide layout
import { lazy, memo, ReactNode, Suspense, useContext } from "react";
import { styled } from "@mui/material/styles";
import { Layout1ConfigType } from "configs/layoutConfig";
import { selectCurrentLayout } from "store/globalSlices/settingSlice";
import { useAppSelector } from "store/hooks";
import { AppContext } from "../../../AppProvider";
import Header from "main/components/header";
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

  return (
    <Root className="col-blue" config={config}>
      {config.leftSidePanel.display && <LeftSideBar />}

      <div className="flex min-w-0 flex-auto">
        <Header />
      </div>
    </Root>
  );
};

export default Layout1;
