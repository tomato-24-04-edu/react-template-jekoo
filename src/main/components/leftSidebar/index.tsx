import React from "react";
import List from "@mui/material/List";
import { alpha, styled } from "@mui/material/styles";
import clsx from "clsx";
import { Theme } from "@mui/system/createTheme";
// import NavItem from "./navbarItems.tsx";
import { useAppDispatch, useAppSelector } from "store/hooks.js";
import { sidebarContents } from "main/constants/sidebarContents.js";
import { selectCurrentLayout } from "store/globalSlices/settingSlice.js";
import Logo from "configs/utils/Logo";
import NavbarItems from "./navbarItems.tsx";
const navbarWidth = 230;

type StyledNavBarProps = {
  theme?: Theme;
  open: boolean;
  position: string;
};

const StyledNavBar = styled("div")<StyledNavBarProps>(
  ({ theme, open, position }) => ({
    backgroundColor: theme.palette.secondary.main,

    minWidth: navbarWidth,
    width: navbarWidth,
    maxWidth: navbarWidth,
    ...(!open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.leavingScreen,
      }),
      ...(position === "left" && {
        marginLeft: `-${navbarWidth}px`,
      }),
      ...(position === "right" && {
        marginRight: `-${navbarWidth}px`,
      }),
    }),
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);

const StyledContent = styled("div")(() => ({
  overscrollBehavior: "contain",
  overflowX: "hidden",
  overflowY: "auto",
  WebkitOverflowScrolling: "touch",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 40px, 100% 10px",
  backgroundAttachment: "local, scroll",
}));
const NavBarContainer = styled("div")(({ theme }) => ({
  color: theme.palette.text.primary,
  "& ::-webkit-scrollbar": {
    display: "none",
  },
  "& ::-webkit-scrollbar-thumb": {
    display: "none",
  },
  "& ::-webkit-scrollbar-thumb:active": {
    display: "none",
  },
}));

const LeftSideBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const config = useAppSelector(selectCurrentLayout);
  return (
    <StyledNavBar
      className="sticky top-0 z-20 h-screen flex-auto shrink-0 flex-col overflow-hidden shadow"
      open={config.navbar.open}
      position={config.navbar.position}
    >
      <NavBarContainer
        className={clsx("flex  py-2 flex-auto flex-col overflow-hidden")}
      >
        <div className="flex h-12  shrink-0 flex-row items-center justify-center ">
          <div className="mx-4 items-center gap-4 flex flex-1">
            <Logo />
            <span className="text-white font-bold text-3xl">Tomato</span>
          </div>

          {/* <NavbarToggleButton className="h-40 w-40 p-0" /> */}
        </div>

        <StyledContent className="flex min-h-0 px-2 py-2 flex-1 flex-col">
          {/* <UserNavbarHeader /> */}

          {sidebarContents.map((e, i) => {
            return (
              <NavbarItems
                key={e.id}
                title={e.title}
                subtitle={e.subtitle}
                url={e.url}
                icon={e.icon}
              />
            );
          })}

          <div className="flex-0 flex items-center justify-center py-48">
            <img
              className="w-full
              max-w-48"
              src="assets/images/svg/tomato_icon_2.svg"
              alt="footer logo"
            />
          </div>
        </StyledContent>
      </NavBarContainer>
    </StyledNavBar>
  );
};

export default LeftSideBar;
