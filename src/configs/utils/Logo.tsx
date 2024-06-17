import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  "& > .logo-icon": {
    transition: theme.transitions.create(["width", "height"], {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  "& > .badge": {
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
}));

/**
 * The logo component.
 */
function Logo() {
  return (
    <Root className="flex items-center">
      <img
        className="logo-icon h-10 w-10"
        src="assets/images/svg/tomato_icon_1.svg"
        alt="logo"
      />
    </Root>
  );
}

export default Logo;
