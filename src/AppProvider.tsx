import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Provider } from "react-redux";
import ErrorBoundary from "./configs/utils/ErrorBoundary";
import store from "./store/store";

type ComponentProps = {
  name?: string;
};

function AppProvider(Component: React.ComponentType<ComponentProps>) {
  return function AppProviderWrapper(
    props: React.PropsWithChildren<ComponentProps>
  ) {
    return (
      <ErrorBoundary>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Provider store={store}>
            <Component {...props} />
          </Provider>
        </LocalizationProvider>
      </ErrorBoundary>
    );
  };
}

export default AppProvider;
