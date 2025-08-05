import { useState } from "react";

function useBoolean(init = false) {
  const [value, setValue] = useState(init);
  const toggle = () => setValue(!value);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return { value, toggle, setTrue, setFalse };
}
export default useBoolean;
