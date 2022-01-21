import { useState } from "react";

function useInputDebounce(
  value: string,
  debounce: number
): [string, string, (value: string) => void] {
  const [debounced, setDebounced] = useState(value);
  const [input, setInput] = useState(value);
  const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();

  function onChange(value: string) {
    setInput(value);
    const timeout = setTimeout(() => {
      setDebounced(value);
    }, debounce);
    if (currentTimeout) clearTimeout(currentTimeout);
    setCurrentTimeout(timeout);
  }

  return [debounced, input, onChange];
}

export default useInputDebounce;
