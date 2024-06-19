import React, { memo } from "react";
import { styled } from "@mui/material/styles";
import clsx from "clsx";
import { Theme } from "@mui/system/createTheme";
import { useAppSelector } from "configs/hooks";
import { navBarContents } from "main/constants/navBarContents";
import { selectCurrentLayout } from "store/globalSlices/settingSlice.js";
import Logo from "configs/utils/Logo";
import NavBarItems from "main/components/navBar/navBarItems";
import { useNavigate } from "react-router-dom";

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
    height: "100vh",
    display: "flex",
    flexDirection: "column",
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
  flexGrow: 1,
}));

const NavBarContainer = styled("div")(({ theme }) => ({
  color: theme.palette.text.primary,
  display: "flex",
  flexDirection: "column",
  height: "100%",
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

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const config = useAppSelector(selectCurrentLayout);

  return (
    <StyledNavBar
      className="sticky top-0 z-20 h-screen flex-auto shrink-0 flex-col overflow-hidden shadow"
      open={config.navbar.open}
      position={config.navbar.position}
    >
      <NavBarContainer
        className={clsx("flex pb-2 flex-auto flex-col overflow-hidden")}
      >
        <div
          onClick={() => navigate("manage-employees")}
          className="flex cursor-pointer py-2 shrink-0 flex-row items-center justify-center"
        >
          <div className="mx-4 items-center gap-4 flex flex-1">
            <Logo height={50} width={50} />
            <span className="text-white font-bold text-3xl">Tomato</span>
          </div>
        </div>

        <StyledContent className="flex min-h-0 px-2 py-2 flex-1 flex-col">
          {/* <UserNavbarHeader /> */}

          {navBarContents.map((e, i) => {
            return (
              <NavBarItems
                key={e.id}
                title={e.title}
                subtitle={e.subtitle}
                url={e.url}
                icon={e.icon}
              />
            );
          })}

          <div className="flex-0 flex mt-5 items-center justify-center py-2">
            <img
              className="w-full max-w-48"
              src="assets/images/svg/tomato_icon_2.svg"
              alt="footer logo"
            />
          </div>
        </StyledContent>
      </NavBarContainer>
    </StyledNavBar>
  );
};

export default memo(NavBar);
