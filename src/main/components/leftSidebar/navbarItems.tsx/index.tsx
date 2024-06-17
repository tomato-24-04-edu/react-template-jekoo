import React from "react";
import { styled } from "@mui/material/styles";
import { ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SvgIcon from "configs/utils/SvgProvider";

const Root = styled("div")(({ theme }) => ({
  minHeight: 44,
  width: "100%",
  display: "flex",
  borderRadius: "6px",
  gap: 20,
  margin: "10px 0 0 0",
  paddingRight: 16,
  paddingLeft: 16,
  paddingTop: 10,
  backgroundColor: theme.palette.primary.main,
  paddingBottom: 10,
  color: theme.palette.primary.light,
  fontWeight: 600,
  letterSpacing: "0.025em",
  cursor: "pointer",
}));

type NavbarItemsProps = {
  key: string;
  title: string;
  subtitle: string;
  url: string;
  icon: string;
};

const NavbarItems: React.FC<NavbarItemsProps> = ({
  title,
  subtitle,
  url,
  icon,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Navigating to:", url);

    navigate(url);
  };

  return (
    <Root onClick={handleClick}>
      <SvgIcon>{icon}</SvgIcon>
      <ListItemText
        sx={{
          margin: 0,
          "& > .MuiListItemText-primary": {
            fontSize: 15,
            color: (theme) => theme.palette.primary.light,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.5rem",
            lineHeight: "20px",
          },
          "& > .MuiListItemText-secondary": {
            fontSize: 9,
            color: (theme) => theme.palette.primary.light,
            letterSpacing: ".06px",
            fontWeight: 500,
            lineHeight: "1.5",
          },
        }}
        primary={title}
        secondary={subtitle}
      />
    </Root>
  );
};

export default NavbarItems;
