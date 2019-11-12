import React, { useEffect } from "react";

export default () => {
  const printCredits = () => {
    console.clear();
    console.log(
      "%cDesign and Development",
      "font-size: 22px; font-weight: bold; color: rgb(0, 231, 192);"
    );
    console.log(
      "%cby Florian Nebenfuehr \nwww.nebenfuehr.today",
      "font-size: 14px;"
    );
  };
  useEffect(() => printCredits());
  return null;
};
