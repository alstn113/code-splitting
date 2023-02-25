// components
import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

const FullHeightScreen = ({ children }: Props) => {
  return (
    <>
      <Global
        styles={css`
          html,
          body,
          #root {
            height: 100%;
          }
        `}
      />
      <Screen>{children}</Screen>
    </>
  );
};

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default FullHeightScreen;
