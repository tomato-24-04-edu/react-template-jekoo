import { SnackbarProvider } from "notistack";
import { StyledEngineProvider } from "@mui/material/styles";
import GlobalTheme from "configs/utils/ThemeProvider";
import { useAppSelector } from "configs/hooks";
import { selectCurrentTheme } from "store/globalSlices/settingSlice";
import AppProvider from "./AppProvider";
import { LayoutProvider } from "main/layouts";
import { BrowserRouter as Router } from "react-router-dom";

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
          <Router >
            <LayoutProvider />
          </Router>
        </SnackbarProvider>
      </GlobalTheme>
    </StyledEngineProvider>
  );
}

export default AppProvider(App);
