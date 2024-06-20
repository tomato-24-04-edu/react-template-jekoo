import React from "react";
import { Button, Typography } from "@mui/material";
import {
  LayOut1Config,
  Layout2Config,
  LayoutConfigType,
} from "configs/layoutConfig";
import { useAppDispatch, useAppSelector } from "configs/hooks";
import {
  changeLayout,
  selectCurrentLayout,
} from "store/globalSlices/settingSlice";
import { styled } from "@mui/material/styles";
import _ from "lodash";

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.primary.light,
  fontSize: "1.3rem",
  marginBottom: "15px",
}));

const LayoutButton = styled(Button)<{ selected: boolean }>(
  ({ theme, selected }) => ({
    padding: theme.spacing(1, 3),
    fontSize: "1rem",
    backgroundColor: selected
      ? theme.palette.primary.dark
      : theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    marginBottom: theme.spacing(2),
  })
);

const PanelContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.secondary.light,
  borderRadius: "10px",
  margin: "0px 30px",
}));

const SidePanel: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentLayout = useAppSelector(selectCurrentLayout);

  const handleLayoutChange = (layoutConfig: LayoutConfigType) => {
    dispatch(
      changeLayout(
        _.merge({}, layoutConfig, {
          navbar: {
            open: true,
          },
        })
      )
    );
  };

  return (
    <PanelContainer>
      <Title variant="h6">레이아웃 선택</Title>
      <div className="flex w-full justify-center items-center gap-8 ">
        <LayoutButton
          onClick={() => handleLayoutChange(LayOut1Config)}
          selected={currentLayout.title === "Layout1"}
        >
          Layout 1
        </LayoutButton>
        <LayoutButton
          onClick={() => handleLayoutChange(Layout2Config)}
          selected={currentLayout.title === "Layout2"}
        >
          Layout 2
        </LayoutButton>
      </div>
    </PanelContainer>
  );
};

export default SidePanel;
