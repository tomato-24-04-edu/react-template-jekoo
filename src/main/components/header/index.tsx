import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import clsx from "clsx";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { memo } from "react";
import { ThemeType } from "types/configTypes";
import SvgIcon from "configs/utils/SvgProvider";
import {
  selectCurrentLayout,
  selectCurrentTheme,
  changeLayout,
} from "store/globalSlices/settingSlice";

type HeaderProps = {
  className?: string;
};

function Header(props: HeaderProps) {
  const { className } = props;

  const currentTheme = useAppSelector(selectCurrentTheme) as ThemeType;
  const currentLayout = useAppSelector(selectCurrentLayout);
  const dispatch = useAppDispatch();

  const handleNavbarToggle = () => {
    dispatch(
      changeLayout({
        navbar: {
          ...currentLayout.navbar,
          display: !currentLayout.navbar.display,
        },
      })
    );
  };

  return (
    <AppBar
      id="header"
      className={clsx("relative z-20 flex shadow", className)}
      color="default"
      sx={{
        backgroundColor: currentTheme.palette.primary.main,
      }}
      position="static"
      elevation={0}
    >
      <Toolbar className="min-h-20 px-3 justify-between p-0 md:min-h-16">
        <IconButton
          onClick={handleNavbarToggle}
          sx={{
            "&:hover": {
              backgroundColor: currentTheme.palette.primary.dark,
            },
          }}
        >
          <SvgIcon className="h-8 w-8 p-0">outline:view-list</SvgIcon>
        </IconButton>
        <IconButton
          sx={{
            "&:hover": {
              backgroundColor: currentTheme.palette.primary.dark,
            },
          }}
        >
          <SvgIcon className="mx-0 h-8 w-8 p-0">outline:arrows-expand</SvgIcon>
        </IconButton>

        {currentLayout.navbar.display &&
          currentLayout.navbar.position === "right" && (
            <IconButton
              sx={{
                "&:hover": {
                  backgroundColor: currentTheme.palette.primary.dark,
                },
              }}
              className="flex px-8"
              onClick={handleNavbarToggle}
            >
              <SvgIcon className="h-8 w-8 p-0">outline:view-list</SvgIcon>
            </IconButton>
          )}
      </Toolbar>
    </AppBar>
  );
}

export default memo(Header);
