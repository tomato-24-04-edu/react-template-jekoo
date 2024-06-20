import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { useTheme } from "@mui/material/styles";

const scrollbarWidth = 8;

const ScrollbarContainer = styled.div<{ theme: any }>`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
  //padding-left: ${scrollbarWidth}px;
  ::-webkit-scrollbar {
    width: ${scrollbarWidth}px;
  }
  ::-webkit-scrollbar-thumb {
    cursor: pointer;
    border-radius: 6px;
    ${(props) => {
      const theme = props.theme;
      return css`
        box-shadow: inset 0 0 0 20px
          ${theme.palette.mode === "light"
            ? "rgba(0, 0, 0, 0.1)"
            : "rgba(255, 255, 255, 0.1)"};
      `;
    }}
  }

  ::-webkit-scrollbar-thumb:active {
    ${(props) => {
      const theme = props.theme;
      return css`
        box-shadow: inset 0 0 0 20px
          ${theme.palette.mode === "light"
            ? "rgba(0, 0, 0, 0.2)"
            : "rgba(255, 255, 255, 0.2)"};
      `;
    }}
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const CustomScrollbar: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const theme = useTheme();

  return <ScrollbarContainer theme={theme}>{children}</ScrollbarContainer>;
};

export default CustomScrollbar;
