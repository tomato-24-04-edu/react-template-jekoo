import { createContext, useMemo } from "react";
import { RouteObject } from "react-router/dist/lib/context";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Provider } from "react-redux";
import ErrorBoundary from "./configs/utils/ErrorBoundary";
import store from "./store/store";
import routes from "configs/routesConfig";

type ComponentProps = {
  name?: string;
};
export type AppContextType = {
  routes: RouteObject[];
};

export const AppContext = createContext<AppContextType>({ routes: [] });

function AppProvider(Component: React.ComponentType<ComponentProps>) {
  return function AppProviderWrapper(
    props: React.PropsWithChildren<ComponentProps>
  ) {
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
              <Component {...props} />
            </Provider>
          </LocalizationProvider>
        </AppContext.Provider>
      </ErrorBoundary>
    );
  };
}

export default AppProvider;
