import { useState } from "react";

const Image = ({ className, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      className={`inline-block align-top opacity-0 transition-opacity ${
        loaded ? "opacity-100" : ""
      } ${className || ""}`}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
};

export default Image;
