import React from 'react';

export const MounthSelect = (props) => {
  const { months, currentMonth, descMonths, onChange } = props;
  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <div className="flexbox">
      <input className="waves-effect waves-light btn" type="button" value="<" />
      <select value={currentMonth} onChange={handleChange}>
        {descMonths.map((month) => {
          return (
            <option key={month.value} value={month.value}>
              {month.desc}
            </option>
          );
        })}
      </select>
      <input className="waves-effect waves-light btn" type="button" value=">" />
    </div>
  );
};
