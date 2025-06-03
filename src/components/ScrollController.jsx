import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollController({ children }) {
  const location = useLocation();

  useEffect(() => {
    const appWrapper = document.getElementById("app-wrapper");

    if (appWrapper) {
      if (location.pathname === "/") {
        appWrapper.style.overflow = "hidden"; // Disable scroll only inside wrapper
      } else {
        appWrapper.style.overflow = "auto"; // Enable scroll for other pages
      }
    }

    return () => {
      if (appWrapper) appWrapper.style.overflow = "auto";
    };
  }, [location]);

  return children;
}

export default ScrollController;
