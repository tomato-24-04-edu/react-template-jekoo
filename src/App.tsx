import { createContext, useMemo } from "react";
import { SnackbarProvider } from "notistack";
import { StyledEngineProvider } from "@mui/material/styles";
import GlobalTheme from "./configs/utils/ThemeProvider";
import { RouteObject } from "react-router/dist/lib/context";
import { useAppSelector } from "./store/hooks";
import { selectCurrentTheme } from "./store/slices/settingSlice/settingSlice";
import AppProvider from "./AppProvider";
import { LayoutProvider } from "main/layouts";

export type AppContextType = {
  routes: RouteObject[];
};

export const AppContext = createContext<AppContextType>({ routes: [] });

function App() {
  const defaultTheme = useAppSelector(selectCurrentTheme);
  return (
    <StyledEngineProvider injectFirst>
      <GlobalTheme theme={defaultTheme}>
        <SnackbarProvider
          maxSnack={5}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          classes={{
            containerRoot: "bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99",
          }}
        >
          <LayoutProvider />
        </SnackbarProvider>
      </GlobalTheme>
    </StyledEngineProvider>
  );
}

export default AppProvider(App);
