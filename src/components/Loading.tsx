import styled from "@emotion/styled";
import LoadingSpinner from "./common/LoadingSpinner";

const Loading = () => {
  return (
    <Container>
      <LoadingSpinner />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export default Loading;
