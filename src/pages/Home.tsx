import styled from "@emotion/styled";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import LoadingSpinner from "../components/common/LoadingSpinner";
import ErrorFallback from "../components/ErrorFallback";
import PostContents from "../components/PostContents";

const Home = () => {
  return (
    <Container>
      <h1>Suspense Test</h1>
      <Wrapper>
        {[1, 0, 0, 1].map((id) => (
          <ContentWrapper>
            <QueryErrorResetBoundary>
              {({ reset }) => (
                <ErrorBoundary
                  onReset={reset}
                  fallbackRender={({ error, resetErrorBoundary }) => (
                    <ErrorFallback
                      error={error}
                      resetErrorBoundary={resetErrorBoundary}
                    />
                  )}
                >
                  <Suspense fallback={<LoadingSpinner />}>
                    <PostContents id={id} />
                  </Suspense>
                </ErrorBoundary>
              )}
            </QueryErrorResetBoundary>
          </ContentWrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fed286;
  border-radius: 1rem;
  width: 350px;
  height: 350px;
  padding: 3rem;
  word-wrap: break-word;
`;

export default Home;
