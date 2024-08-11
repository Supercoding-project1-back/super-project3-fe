import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./InputTextField.module.scss";

const InputTextField = ({
  label = "",
  name,
  value: initialValue = "",
  type = "text",
  autoFocus = false,
  placeholder = "",
  onChange = () => { },
  onFocus = () => { },
  onBlur = () => { },
  onKeyDown = () => { },
}) => {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(name, e.target.value);
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus(name, e.target.value);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur(name, e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onKeyDown(e);
    }
  };

  return (
    <label className={styles.label}>
      {label}
      <input
        id={`input_${name}`}
        value={value}
        type={type}
        placeholder={
          (!isFocused && !value) || (!value && isFocused) ? placeholder : ""
        }
        ref={inputRef}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={styles.input}
      />
    </label>
  );
};

InputTextField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.oneOf(["text", "password", "number", "price"]),
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default InputTextField;
