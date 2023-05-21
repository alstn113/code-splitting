import { useContext } from "react";

import ProgressBar from "../common/ProgressBar/ProgressBar";
import { IsPageLoadedContext } from "./Provider";

import { API_REQUEST_TIMEOUT } from "../../constants";
import { ProgressContainer } from "./PageSuspense.styles";

const PageProgress = () => {
  const isPageLoaded = useContext(IsPageLoadedContext);

  return (
    <ProgressContainer>
      <ProgressBar
        animation={isPageLoaded ? "done" : "play"}
        duration={`${API_REQUEST_TIMEOUT / 1000}s`} // 5s
      />
    </ProgressContainer>
  );
};

export default PageProgress;
