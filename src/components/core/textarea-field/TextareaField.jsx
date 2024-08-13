import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./TextareaField.module.scss";

const TextareaField = ({
  className = '',
  label = "",
  name,
  value: initialValue = "",
  autoFocus = false,
  placeholder = "",
  rows = 1,
  onChange = () => { },
  onFocus = () => { },
  onBlur = () => { },
  onKeyDown = () => { },
}) => {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    if (autoFocus && textareaRef.current) {
      textareaRef.current.focus();
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
      e.preventDefault();
      onKeyDown(e);
    }
  };

  return (
    <div className={`${styles.label} ${className}`}>
      {label && <span className={styles.labelText}>{label}</span>}
      <textarea
        id={`textarea_${name}`}
        value={value}
        placeholder={
          (!isFocused && !value) || (!value && isFocused) ? placeholder : ""
        }
        ref={textareaRef}
        rows={rows}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={styles.textarea}
      />
    </div>
  );
};

TextareaField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default TextareaField;