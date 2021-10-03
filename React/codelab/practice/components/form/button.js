import { useState } from "react";

const ButtonComp = ({onClick, children}) => {
  return (
    <button
      className="btn-submit"
      onClick={onClick}>
        {children}
    </button>
  );
}

export default ButtonComp;