import React, { useEffect, useState } from "react";

const useMobileScreen = () => {
  const [width, setWidth] = useState(0);

  const handleWindowSizeChange = () => {
    !width && setWidth(window.innerWidth);
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
