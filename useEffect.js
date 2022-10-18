import { useEffect, useState } from "react";

const Example = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // xu ly call api
    // detect value doi cua sate
    console.log("useEffect");
    if (value > 10) console.log("lon hon 10");
  }, [value]);

  console.log("1:", value);
  const renderA = (value) => {
    console.log(value);
    setValue(10);
  };

  return (
    <div>
      ehllo
      <button onClick={() => renderA(1)}>cong 1</button>
      {value}
      <button onClick={() => setValue(value - 1)}>tru 1</button>
    </div>
  );
};

export default Example;
