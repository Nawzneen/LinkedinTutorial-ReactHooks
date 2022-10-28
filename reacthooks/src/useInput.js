import React from "react";
export function useInput(intialValue) {
  const [value, setValue] = React.useState(intialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(intialValue),
  ];
}
