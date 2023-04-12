import React from "react";

function useGetTime(time: Date) {
  let date = new Date(time);
  let _now = new Date();
  let diff = (_now.getTime() - date.getTime()) / (1000);
  let returnTime;
  function ceiltime(n: number) {
    return Math.ceil(n);
  }
  let days = 24 * 60 * 60
  let hours = 60 * 60
  let minutes = 60
  if (diff >= days) {
    returnTime = `${ceiltime(diff / (days))} يوم`;
  } else if (diff >= hours) {
    returnTime = `${ceiltime(diff / hours)} س`;
  } else {
    returnTime = `${ceiltime(diff / minutes)} د`;
  }
  return { returnTime };
}

export default useGetTime;
