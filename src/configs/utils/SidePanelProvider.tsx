import { styled } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useAppDispatch, useAppSelector } from "configs/hooks";
import {
  selectSidePanel,
  selectCurrentTheme,
  changeLayout,
} from "store/globalSlices/settingSlice";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "./SvgProvider";
import Typography from "@mui/material/Typography";
import { Divider as MuiDivider } from "@mui/material";

const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 480,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.primary.light,
  fontSize: "2rem",
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  width: 40,
  height: 40,
}));

const Divider = styled(MuiDivider)(({ theme }) => ({
  marginBottom: "30px",
  height: "2px",
  backgroundColor: theme.palette.primary.light,
}));

function SidePanelProvider({ children }) {
  const dispatch = useAppDispatch();
  const panelConfig = useAppSelector(selectSidePanel);
  const currentTheme = useAppSelector(selectCurrentTheme);
  const handleClose = () => {
    dispatch(
      changeLayout({
        sidepanel: {
          open: false,
        },
      })
    );
  };

  return (
    <StyledSwipeableDrawer
      open={panelConfig.open}
      anchor={panelConfig.position}
      onOpen={() => {}}
      onClose={handleClose}
      disableSwipeToOpen
    >
      <div className="flex justify-between items-center px-6 py-5">
        <Title variant="h6">Settings</Title>
        <CloseButton
          onClick={handleClose}
          sx={{
            "&:hover": {
              backgroundColor: currentTheme.palette.primary.dark,
            },
          }}
        >
          <SvgIcon className="h-7 w-7 p-0">outline:x</SvgIcon>
        </CloseButton>
      </div>
      <Divider />

      {children}
    </StyledSwipeableDrawer>
  );
}

export default SidePanelProvider;
