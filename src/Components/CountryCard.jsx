import * as React from "react";
export default function CountryCard({ name, capital, population, imgURL }) {
  const handleStringAdjuster = (string) => {
    let newStr = "";
    const generateStr = (arr) => {
      for (let i = 0; i <= 7; i++) {
        newStr += `${arr[i]}`;
      }
      if (newStr.length <= 10) {
        newStr += `...`;
        // console.log(newStr);
        return newStr;
      }
    };
    if (typeof string == "string") {
      let strArr = string.split("");
      return generateStr(strArr);
    } else if (string instanceof Array) {
      if (string[0].length <= 5) {
        return string[0];
      }
      let strArr = string[0].split("");
      return generateStr(strArr);
    }
  };
  return (
    <div className="bg-[#DDDDDD] basis-1/5 grid grid-cols-1 grid-rows-[100px, 20px 20px] shadow-md rounded-md gap-0 cursor-pointer m-2">
      <div className="row-start-1 w-[200px] h-[140px]">
        <img src={imgURL} alt={name} className="rounded-t-md w-full h-full" />
      </div>
      <div className="row-start-2 text-2xl m-0 p-0 text-center font-medium self-center">
        {name.length > 15 ? handleStringAdjuster(name) : name}
      </div>
      <div className="row-start-3 text-[#434242] indent-3 self-center text-center">
        {/* <span>{handleStringAdjuster(capital)}</span> | <span>{population}</span> */}
      </div>
    </div>
  );
}
