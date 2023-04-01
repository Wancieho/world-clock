"use client";

import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

import styles from "./page.module.css";
import Clock from "./components/Clock/clock";

export default function Home() {
  const [data, setData] = useState<string[]>();
  const [region, setRegion] = useState<string>();

  useEffect(() => {
    if (!data) {
      axios
        .get("http://worldtimeapi.org/api/timezone")
        .then((r) => setData(r.data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data && !region) {
      setRegion(data[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <main className={styles.main}>
      <h1>World Clock</h1>
      <select
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          console.log(e.target.value);
          setRegion(e.target.value);
        }}
      >
        {data?.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      {region && <Clock region={region} />}
    </main>
  );
}
