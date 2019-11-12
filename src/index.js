import React, { useEffect } from "react";

const Credits = ({ heading }) => {
  const printCredits = () => {
    console.clear();
    console.log(
      "%c",
      heading,
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

Credits.defaultProps = {
  heading: "Desgin and Development"
};

export default Credits;
