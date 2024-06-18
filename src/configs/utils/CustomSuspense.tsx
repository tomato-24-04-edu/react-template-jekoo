import Loading from "./Loading";
import { ReactNode, Suspense } from "react";
import { LoadingProps } from "./Loading";

type SuspenseProps = {
  loadingProps?: LoadingProps;
  children: ReactNode;
};

function CustomSuspense(props: SuspenseProps) {
  const { children, loadingProps } = props;
  return (
    <Suspense fallback={<Loading {...loadingProps} />}>{children}</Suspense>
  );
}

export default CustomSuspense;
