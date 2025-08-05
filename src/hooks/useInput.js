import { useState } from "react";

export default function useInput(init = "") {
  const [value, setValue] = useState(init);
  const onChange = e => setValue(e.target.value);
  const reset = () => setValue(init);
  return { value, onChange, reset };
}
