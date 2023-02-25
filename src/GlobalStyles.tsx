import { css, Global } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
        }
      `}
    />
  );
};

export default GlobalStyles;
