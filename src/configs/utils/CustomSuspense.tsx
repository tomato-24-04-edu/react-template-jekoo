import Loading from "./Loading";
import { ReactNode, Suspense } from "react";
import { LoadingProps } from "./Loading";

type SuspenseProps = {
  loadingProps?: LoadingProps;
  children: ReactNode;
};

/**
 * The FuseSuspense component is a wrapper around the React Suspense component.
 * It is used to display a loading spinner while the wrapped components are being loaded.
 * The component is memoized to prevent unnecessary re-renders.
 * React Suspense defaults
 * For to Avoid Repetition
 */
function CustomSuspense(props: SuspenseProps) {
  const { children, loadingProps } = props;
  return (
    <Suspense fallback={<Loading {...loadingProps} />}>{children}</Suspense>
  );
}

export default CustomSuspense;
