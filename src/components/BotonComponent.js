import React from "react";

export const BotonComponent = ({ labelText, type, id, className }) => {
  return (
    <div className="mb-3">
      <button id={id} type={type} className={className}>
        {labelText}
      </button>
    </div>
  );
};
