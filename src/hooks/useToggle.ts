import { useState, useCallback } from "react";

const useToggle = (initialState = false): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialState);

  const toggleValue = useCallback(() => {
    setValue((prevState) => !prevState);
  }, []);

  return [value, toggleValue];
};

export default useToggle;
