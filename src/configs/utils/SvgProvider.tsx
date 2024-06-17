import { styled } from "@mui/material/styles";
import { Box, BoxProps } from "@mui/system";
import Icon from "@mui/material/Icon";
import clsx from "clsx";
import { forwardRef } from "react";

type SvgIconProps = BoxProps & {
  fill?: string;
  xmlns?: string;
  viewBox?: string;
  size?: number | string;
  color?: "inherit" | "background" | "primary" | "secondary";
};

const Root = styled(Box)<SvgIconProps>(
  ({ theme, size = 24, color = "inherit" }) => ({
    width: size,
    height: size,
    minWidth: size,
    minHeight: size,
    fontSize: size,
    lineHeight: size,
    color: {
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
      background: theme.palette.primary.light,
      inherit: "currentColor",
    }[color] as string,
  })
);

const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>((props, ref) => {
  const { children, className = "", color = "background" } = props;

  if (typeof children !== "string") {
    return null;
  }

  if (!children.includes(":")) {
    return <Box component={Icon} ref={ref} {...props} />;
  }

  const iconPath = children.replace(":", ".svg#");

  return (
    <Root
      {...props}
      component="svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={clsx("shrink-0 fill-current", className)}
      ref={ref}
      color={color}
    >
      <use xlinkHref={`assets/icons/${iconPath}`} />
    </Root>
  );
});

export default SvgIcon;
