import { createContext, useMemo } from "react";
import { SnackbarProvider } from "notistack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StyledEngineProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./store/store";
import GlobalTheme from "./configs/utils/ThemeProvider";
import { RouteObject } from "react-router/dist/lib/context";
import ErrorBoundary from "./configs/utils/ErrorBoundary";
import { useAppSelector } from "./store/hooks";
import { selectCurrentTheme } from "./store/slices/settingSlice/settingSlice";

export type AppContextType = {
  routes: RouteObject[];
};

const AppContext = createContext<AppContextType>({ routes: [] });

function App() {
  const defaultTheme = useAppSelector(selectCurrentTheme);
  // const val = useMemo(
  //   () => ({
  //     routes,
  //   }),
  //   [routes]
  // );

  return (
    <ErrorBoundary>
      {/* <AppContext.Provider value={val}> */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Provider store={store}>
          <StyledEngineProvider injectFirst>
            <GlobalTheme theme={defaultTheme}>
              <SnackbarProvider
                maxSnack={5}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                classes={{
                  containerRoot:
                    "bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99",
                }}
              >
                <div>hi hello</div>
                {/* <Layout /> */}
              </SnackbarProvider>
            </GlobalTheme>
          </StyledEngineProvider>
        </Provider>
      </LocalizationProvider>
      {/* </AppContext.Provider> */}
    </ErrorBoundary>
  );
}

export default App;
