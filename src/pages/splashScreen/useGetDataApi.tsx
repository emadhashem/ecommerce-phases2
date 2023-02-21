import React from "react";

function useGetDataApi() {
  async function getDataApi() {
    return new Promise<boolean>((res, rej) => {
      try {
        setTimeout(() => {
          res(true);
        }, 1500);
      } catch (error) {
        rej(error);
      }
    });
  }
  return getDataApi;
}

export default useGetDataApi;
