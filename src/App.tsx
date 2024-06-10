import { createContext, useMemo } from "react";

//스낵바 (알림 메세지)
import { SnackbarProvider } from "notistack";

//날짜 라이브러리
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

//캐싱
import { CacheProvider } from "@emotion/react";
import createCache, { Options } from "@emotion/cache";

//에러처리
import ErrorBoundary from "./configs/utils/ErrorBoundary";

//CSSOM 형성
import { StyledEngineProvider } from "@mui/material/styles";

import { Provider } from "react-redux";
import store from "./store/store";
import { RouteObject } from "react-router/dist/lib/context";

export type AppContextType = {
  routes: RouteObject[];
};

const AppContext = createContext<AppContextType>({ routes: [] });

function App() {
  const val = useMemo(
    () => ({
      routes,
    }),
    [routes]
  );

  return (
    <ErrorBoundary>
      <AppContext.Provider value={val}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Provider store={store}>
            <StyledEngineProvider injectFirst>
              <CacheProvider
                value={createCache(
                  emotionCacheOptions[mainTheme] as Options
                )}
              >
                <Theme theme={mainTheme}>
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
                    <Layout layouts={themeLayouts} />
                  </SnackbarProvider>
                </Theme>
              </CacheProvider>
            </StyledEngineProvider>
          </Provider>
        </LocalizationProvider>
      </AppContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
