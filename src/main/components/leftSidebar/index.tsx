import React from "react";
import List from "@mui/material/List";
import { alpha, styled } from "@mui/material/styles";
import clsx from "clsx";
import { Theme } from "@mui/system/createTheme";
// import NavItem from "./navbarItems.tsx";
import { useAppDispatch, useAppSelector } from "store/hooks.js";
import { navigationConfig } from "main/constants/sidebarContents.js";
import { selectCurrentLayout } from "store/globalSlices/settingSlice.js";
import Logo from "configs/utils/Logo";
import { ListItem, ListItemButtonProps, ListItemText } from "@mui/material";

const navbarWidth = 230;

type StyledNavBarProps = {
  theme?: Theme;
  open: boolean;
  position: string;
};

type ListItemButtonComponentProps = ListItemButtonProps & {
  itempadding: number;
};

const ItemContainer = styled(ListItem)<ListItemButtonComponentProps>(
  ({ theme, ...props }) => ({
    minminHeight: 44,
    width: "100%",
    borderRadius: "6px",
    margin: "28px 0 0 0",
    paddingRight: 16,
    paddingLeft: props.itempadding > 80 ? 80 : props.itempadding,
    paddingTop: 10,
    paddingBottom: 10,
    color: alpha(theme.palette.text.primary, 0.7),
    fontWeight: 600,
    letterSpacing: "0.025em",
  })
);

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
        className={clsx("flex h-full py-2 flex-auto flex-col overflow-hidden")}
      >
        <div className="flex h-12  shrink-0 flex-row items-center justify-center ">
          <div className="mx-4 items-center gap-4 flex flex-1">
            <Logo />
            <span className="text-white font-bold text-3xl">Tomato</span>
          </div>

          {/* <NavbarToggleButton className="h-40 w-40 p-0" /> */}
        </div>

        <StyledContent className="flex min-h-0 flex-1 flex-col">
          {/* <UserNavbarHeader /> */}

          <>
            {navigationConfig.map((e, i) => {
              return (
                <ItemContainer
                  component={e.component}
                  itempadding={e.itempadding}
                  className={clsx(
                    "fuse-list-subheader flex items-center  py-10",
                    !item.url ? "cursor-default" : ""
                  )}
                  onClick={() => onItemClick && onItemClick(item)}
                  sx={item.sx}
                  {...itemProps}
                >
                  <ListItemText
                    className="fuse-list-subheader-text"
                    sx={{
                      margin: 0,
                      "& > .MuiListItemText-primary": {
                        fontSize: 12,
                        color: (theme) =>
                          theme.palette.mode === "dark"
                            ? "secondary.light"
                            : "secondary.main",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: ".05em",
                        lineHeight: "20px",
                      },

                      "& > .MuiListItemText-secondary": {
                        fontSize: 11,
                        color: "text.disabled",
                        letterSpacing: ".06px",
                        fontWeight: 500,
                        lineHeight: "1.5",
                      },
                    }}
                    primary={e.title}
                    secondary={e.subtitle}
                  />
                </ItemContainer>
              );
            })}
          </>
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
