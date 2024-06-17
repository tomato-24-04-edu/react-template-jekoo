import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Hidden from "@mui/material/Hidden";
import Toolbar from "@mui/material/Toolbar";
import clsx from "clsx";
import { useMediaQuery } from "@mui/material";
import { useAppSelector } from "store/hooks";
import { memo } from "react";
import { useTheme } from "@mui/material/styles";
import { Layout1ConfigType } from "configs/layoutConfig";
import { ThemeType } from "types/configTypes";
import SvgIcon from "configs/utils/SvgProvider";
import {
  selectCurrentLayout,
  selectCurrentTheme,
} from "store/globalSlices/settingSlice";

// import {
//   selectFuseCurrentLayoutConfig,
//   selectToolbarTheme,
// } from "@fuse/core/FuseSettings/fuseSettingsSlice";
// import { Layout1ConfigDefaultsType } from "app/theme-layouts/layout1/Layout1Config";
// import NotificationPanelToggleButton from "src/app/main/apps/notifications/NotificationPanelToggleButton";
// import NavbarToggleButton from "app/theme-layouts/shared-components/navbar/NavbarToggleButton";
// import { selectFuseNavbar } from "app/theme-layouts/shared-components/navbar/navbarSlice";
// import { useAppSelector } from "app/store/hooks";
// import AdjustFontSize from '../../shared-components/AdjustFontSize';
// import FullScreenToggle from '../../shared-components/FullScreenToggle';
// import LanguageSwitcher from '../../shared-components/LanguageSwitcher';
// import NavigationShortcuts from '../../shared-components/navigation/NavigationShortcuts';
// import NavigationSearch from '../../shared-components/navigation/NavigationSearch';
// import UserMenu from '../../shared-components/UserMenu';
// import QuickPanelToggleButton from '../../shared-components/quickPanel/QuickPanelToggleButton';

type HeaderProps = {
  className?: string;
};

function Header(props: HeaderProps) {
  const { className } = props;
  const theme = useTheme();
  const hidden = useMediaQuery(theme.breakpoints.down("lg"));
  const currentTheme = useAppSelector(selectCurrentTheme) as ThemeType;
  const currentLayout = useAppSelector(
    selectCurrentLayout
  ) as Layout1ConfigType;
  // const navbar = useAppSelector(selectFuseNavbar);
  // const toolbarTheme = useAppSelector(selectToolbarTheme);

  return (
    <AppBar
      id="fuse-toolbar"
      className={clsx("relative z-20 flex shadow", className)}
      color="default"
      sx={{
        backgroundColor: currentTheme.palette.background.default,
      }}
      position="static"
      elevation={0}
    >
      <Toolbar className="min-h-48 p-0 md:min-h-64">
        <div className="flex flex-1 px-16">
          {currentLayout.navbar.display &&
            currentLayout.navbar.position === "left" && (
              <>
                {hidden ? null : (
                  <SvgIcon className="mx-0 h-40 w-40 p-0">
                    outline:view-list
                  </SvgIcon>
                )}
              </>
            )}

          {/* <Hidden lgDown>
            <NavigationShortcuts />
          </Hidden> */}
        </div>

        <div className="flex h-full items-center overflow-x-auto px-8">
          <SvgIcon className="mx-0 h-40 w-40 p-0">outline:arrows-expand</SvgIcon>
        </div>

        {currentLayout.navbar.display &&
          currentLayout.navbar.position === "right" && (
            <>
              {/* <Hidden lgDown>
                {!navbar.open && (
                  <NavbarToggleButton className="mx-0 h-40 w-40 p-0" />
                )}
              </Hidden>

              <Hidden lgUp>
                <NavbarToggleButton className="mx-0 h-40 w-40 p-0 sm:mx-8" />
              </Hidden> */}
            </>
          )}
      </Toolbar>
    </AppBar>
  );
}

export default memo(Header);
