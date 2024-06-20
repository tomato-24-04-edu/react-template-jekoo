import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  transition: theme.transitions.create(["width", "height"], {
    duration: theme.transitions.duration.shortest,
    easing: theme.transitions.easing.easeInOut,
  }),
}));

type LogoProps = {
  height: number;
  width: number;
};

function Logo<LogoProps>({ height, width }) {
  return (
    <Root className="flex items-center">
      <img
        style={{ width: width, height: height }}
        src="assets/images/svg/tomato_icon_1.svg"
        alt="logo"
      />
    </Root>
  );
}

export default Logo;
