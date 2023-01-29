import { useRef, useImperativeHandle, forwardRef } from "react";
import { NumericFormat } from "react-number-format";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    value: () => {
      return inputRef.current.value;
    },
    change: (newValue) => {
      inputRef.current.value = newValue;
    }
  }));

  return (
    <NumericFormat
      prefix={"$"}
      thousandsGroupStyle="thousand"
      thousandSeparator=","
      placeholder="$100,000"
      className="form-input"
      getInputRef={inputRef}
    />
  );
});

export default Input;