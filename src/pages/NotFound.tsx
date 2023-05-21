import { useState } from "react";
import ProgressBar from "../components/common/ProgressBar/ProgressBar";

const NotFound = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div>
        <ProgressBar
          duration="10s"
          progressStatus={toggle ? "playing" : "completed"}
        />
      </div>
      <div>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
      </div>
    </div>
  );
};

export default NotFound;
