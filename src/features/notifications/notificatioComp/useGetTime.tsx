import React from "react";

function useGetTime(time: Date) {
  let date = new Date(time);
  let returnTime;
  function ceiltime(n: number) {
    return Math.ceil(n);
  }
  if (date.getMinutes() >= 24 * 60) {
    returnTime = `${ceiltime(date.getMinutes() / (24 * 60))} يوم`;
  } else if (date.getMinutes() >= 60) {
    returnTime = `${ceiltime(date.getMinutes() / 60)} س`;
  } else {
    returnTime = `${ceiltime(date.getMinutes())} د`;
  }
  return { returnTime };
}

export default useGetTime;
