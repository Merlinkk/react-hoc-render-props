import React, { useState } from "react";

const Wrap = (OriginalComponent) => {
  function Wrap() {
    const [count, setCount] = useState(0);

    const handleCount = () => {
      setCount(count + 1);
    };

    return <OriginalComponent count={count} handleCount={handleCount} />;
  }
  return Wrap;
};

export default Wrap;
