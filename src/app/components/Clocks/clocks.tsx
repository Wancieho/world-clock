import { useState } from "react";

import Clock from "../Clock/clock";

const Clocks = () => {
  const [regions] = useState<string[]>([
    "America/Detroit",
    "Africa/Johannesburg",
  ]);

  return (
    <>
      {regions.map((region) => (
        <Clock key={region} region={region} />
      ))}
    </>
  );
};

export default Clocks;
