import { useEffect, useState } from "react";
import axios from "axios";

export type CityData = {
  timezone: string;
  datetime: string;
};

const Clock = ({ region }: { region: string }) => {
  const [data, setData] = useState<CityData>();

  useEffect(() => {
    if (region) {
      axios
        .get(`http://worldtimeapi.org/api/timezone/${region}`)
        .then((r) => setData(r.data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region]);

  return (
    <>
      {data && (
        <>
          {data.timezone} {data.datetime}
        </>
      )}
    </>
  );
};

export default Clock;
