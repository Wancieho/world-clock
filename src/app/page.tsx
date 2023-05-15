"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./page.module.css";
import Clocks from "./components/Clocks/clocks";

export default function Home() {
  const [data, setData] = useState<string[]>();

  useEffect(() => {
    if (!data) {
      axios
        .get("http://worldtimeapi.org/api/timezone")
        .then((r) => setData(r.data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={styles.main}>
      <h1>World Clock</h1>
      {/* <select
      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
        setRegion(e.target.value)
      }
      >
        {data?.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select> */}
      <Clocks />
    </main>
  );
}
