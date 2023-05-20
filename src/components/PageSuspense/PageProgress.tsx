import { useContext } from "react";

import ProgressBar from "../common/ProgressBar/ProgressBar";
import { IsPageLoadedContext } from "./Provider";

const PageProgress = () => {
  const isPageLoaded = useContext(IsPageLoadedContext);

  const API_REQUEST_TIMEOUT = 5000; // 5 seconds

  return (
    <ProgressBar
      animation={isPageLoaded ? "done" : "play"}
      duration={`${API_REQUEST_TIMEOUT / 1000}s`}
    />
  );
};

export default PageProgress;
