import { useEffect, useState } from "react";
import axios from "axios";
import ReactClock from "react-clock";
import "react-clock/dist/Clock.css";
// import Moment from "react-moment";
import moment from "moment";
import "moment-timezone";

import styles from "./clock.module.css";

export type CityData = {
  timezone: string;
  datetime: string;
};

const Clock = ({ region }: { region: string }) => {
  const [data, setData] = useState<CityData>();
  const [time, setTime] = useState<Date>();
  const [inc, setInc] = useState<number>(0);
  let interval: any;

  useEffect(() => {
    if (region) {
      axios
        .get(`http://worldtimeapi.org/api/timezone/${region}`)
        .then((r) => setData(r.data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region]);

  useEffect(() => {
    // console.log(region, data);
    if (data) {
      // const dateTimeString = "2023-04-08T00:40:30.241742+02:00";
      const dateTimeString = "2023-04-07T19:07:53.856086-04:00";
      const timezoneOffset = new Date(dateTimeString).getTimezoneOffset();
      // const timezoneOffset = moment(dateTimeString).utcOffset();
      const dateObject = new Date(dateTimeString + timezoneOffset);
      console.log(
        // region,
        dateTimeString,
        // data?.datetime,
        // dateTimeString,
        timezoneOffset
        // new Date(dateTimeString).getTime(),
        // new Date(new Date(dateTimeString).getTime() + timezoneOffset * 60000)
      );
      // console.log(
      //   region,
      //   data?.datetime,
      //   // moment.parseZone(data?.datetime).toDate()
      //   // moment(data?.datetime),
      //   // moment(data?.datetime).utcOffset()
      //   moment().utcOffset(data?.datetime).utcOffset()
      // );
      // console.log(
      //   "two",
      //   region,
      //   new Date(
      //     data?.datetime + moment().utcOffset(data?.datetime).utcOffset()
      //   )
      // );
      // console.log(region, new Date(data?.datetime + moment(data?.datetime).utcOffset()));
    }
  }, [data]);

  // var minsToAdd = 15;
  // var time = "15:57";
  // var newTime = new Date(
  //   new Date("1970/01/01 " + time).getTime() + minsToAdd * 60000
  // ).toLocaleTimeString("en-UK", {
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   hour12: false,
  // });

  // useEffect(() => {
  //   console.log(7);
  //   if (!interval) {
  //     console.log(8);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //     interval = setInterval(() => {
  //       console.log(region, moment.tz(region));
  //       // console.log(region, moment(moment.tz(region).toString()).toDate());
  //       // console.log(region, moment.tz(region).toString());
  //       // setTime(moment(moment.tz(region).toLocaleString()).toDate());
  //       // setTime(moment(moment.tz(region).toString()).toDate());
  //     }, 1000);
  //   }

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (data && !interval) {
  //     const initialTime = new Date(
  //       String(moment.tz(data.datetime, region).add(inc, "minute"))
  //     );
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //     interval = setInterval(() => {
  //       // setTime(moment.tz(region).toISOString());
  //       setTime(String(moment(moment.tz(region).toLocaleString()).format()));
  //       // setTime("2023-04-07T13:48:11");
  //       // console.log(new Date(moment.tz(region).toLocaleString()).toUTCString());
  //       // console.log(moment(moment.tz(region).toLocaleString()).format());
  //       // setTime(moment('01:00:30'));
  //       // setTime((current: any) => {
  //       //   if (!current) {
  //       //     return initialTime;
  //       //   }
  //       //   console.log("current", current.getTime() + inc, inc);
  //       //   return current;
  //       // });
  //       // setTime(
  //       //   new Date(String(moment.tz(data.datetime, region).add(inc, "second")))
  //       // );
  //       // setTime(String(moment(data.datetime).add(inc, "second").tz(region)));
  //       // setTime(String(moment().add(inc, "second").tz(region)));
  //       // setTime(String(moment(data.datetime).add(inc, "second")));
  //       setInc(inc + 1);
  //       // console.log(interval);
  //     }, 1000);
  //   }

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [data]);

  return (
    <>
      {data && (
        <>
          <h4>{inc}</h4>
          {/* <br />
          {String(moment(data.datetime))}
          <br />
          {String(data.datetime)}
          <br />
          {String(
            moment().tz(region)
            // moment(String(data.datetime), "hh:mm:ss")
            // moment(String(data.datetime)).format("hh:mm:ss")
            // moment(String(data.datetime)).add(1, "second").format("hh:mm:ss")
            // moment(String(data.datetime)).add(1, "second").format("HH:mm:ss")
          )} */}
          {/* <br /> - {moment(time).valueOf()}
          <br />
        {String(moment(time).toDate())} */}
          {/* <br /> - {region}
          <br /> - {data.datetime}
          <br />
          {String(
            new Date(new Date(data.datetime).getTime() + 0).toISOString()
          )} */}
          {/* <br />
          {String(moment().tz(region))}
          <br />
          {String(moment().tz(region).add(1, "hour"))}
          <br /> */}
          {/* <br />
          {String(
            new Date(String(moment.tz(data.datetime, region).add(0, "hour")))
          )}
          <br /> */}
          {time && (
            <div className={styles.wrapper}>
              <h2>{region}</h2>
              <h3>{JSON.stringify(time)}</h3>
              <h3>{moment(time).format("HH:mm:ss")}</h3>
              {/* <h3>{moment(new Date(time)).format("HH:mm:ss")}</h3> */}
              <h3>{/* <Moment date={data.datetime} format="HH:mm:ss" /> */}</h3>
              {/* <ReactClock
                value={String(moment(time).utc())}
                className={styles.clock}
              /> */}
              <ReactClock value={time} className={styles.clock} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Clock;
