import React, { useEffect, useState } from "react";

const useMobileScreen = () => {
  const [width, setWidth] = useState(0);

  if (typeof window !== "undefined" && !width) {
    setWidth(window.innerWidth);
  }
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [width]);

  return width <= 768;
};

export default useMobileScreen;
