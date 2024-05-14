import React, { useState, useRef, useEffect } from "react";

export default function SelectOption() {
  const [selectedOption, setSelectedOption] = useState(
    "Hiển thị 10 bản ghi 1 trang"
  );
  const dropdownRef = useRef(null);
  const selectRef = useRef(null);

  const options = [
    "Hiển thị 10 bản ghi 1 trang",
    "Hiển thị 20 bản ghi 1 trang",
    "Hiển thị 30 bản ghi 1 trang",
    "Hiển thị 40 bản ghi 1 trang",
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      selectRef.current.blur();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="dropdown">
      <select
        ref={selectRef}
        value={selectedOption}
        onChange={handleOptionChange}
        onClick={(e) => e.stopPropagation()}
        className="dropdown-select"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
