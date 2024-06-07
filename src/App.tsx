import { SnackbarProvider } from "notistack";

import { createContext } from "react";
import { RouteObject } from "react-router/dist/lib/context";
import { StyledEngineProvider } from '@mui/material/styles';
import { Provider } from "react-redux";


export type AppContextType = {
  routes: RouteObject[];
};

const AppContext = createContext<AppContextType>({ routes: [] });

function App() {
  return (
    <>
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
        {/* <Provider store={store}> */}
        <StyledEngineProvider injectFirst></StyledEngineProvider>
        {/* </Provider> */}
        {/* <FuseLayout layouts={themeLayouts} /> */}
      </SnackbarProvider>
    </>
  );
}

export default App;
