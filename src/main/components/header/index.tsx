import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Switch from "@mui/material/Switch";

import Tooltip from '@mui/material/Tooltip';
import { useEffect, useLayoutEffect, useState } from 'react';

import clsx from "clsx";
import { useAppSelector, useAppDispatch } from "configs/hooks";
import { memo } from "react";
import { ThemeType } from "types/configTypes";
import themesConfig from "configs/themeConfig";
import SvgIcon from "configs/utils/SvgProvider";
import Logo from "configs/utils/Logo";
import {
  selectCurrentLayout,
  selectCurrentTheme,
  changeLayout,
  changeTheme,
} from "store/globalSlices/settingSlice";
import { useNavigate } from "react-router-dom";

type HeaderProps = {
  className?: string;
};

function Header(props: HeaderProps) {
  const { className } = props;
  const navigate = useNavigate();
  const currentTheme = useAppSelector(selectCurrentTheme) as ThemeType;
  const currentLayout = useAppSelector(selectCurrentLayout);
  const dispatch = useAppDispatch();

  const handleNavbarToggle = () => {
    dispatch(
      changeLayout({
        navbar: {
          ...currentLayout.navbar,
          open: !currentLayout.navbar.open,
        },
      })
    );
  };

  const handleThemeChange = () => {
    if (currentTheme.palette.mode === "dark") {
      dispatch(changeTheme(themesConfig.default));
    } else {
      dispatch(changeTheme(themesConfig.dark));
    }
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
        {currentLayout.navbar.position === "left" && (
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
        )}
        {!currentLayout.navbar.open && (
          <div
            onClick={() => navigate("manage-employees")}
            className="flex h-12 mr-10 cursor-pointer shrink-0 flex-row items-center justify-center"
          >
            <div className="mx-4 items-center gap-2 flex flex-1">
              <Logo />
              <span className="text-white font-bold text-3xl">Tomato</span>
            </div>
          </div>
        )}
        <div className="flex items-center">
          <Switch
            checked={currentTheme.palette.mode === "dark"}
            onChange={handleThemeChange}
            name="themeToggle"
            color="default"
          />
          <IconButton
            onClick={handleThemeChange}
            sx={{
              "&:hover": {
                backgroundColor: currentTheme.palette.primary.dark,
              },
            }}
          >
            <SvgIcon className="mx-0 h-8 w-8 p-0">outline:arrows-expand</SvgIcon>
          </IconButton>
        </div>
        {currentLayout.navbar.position === "right" && (
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
