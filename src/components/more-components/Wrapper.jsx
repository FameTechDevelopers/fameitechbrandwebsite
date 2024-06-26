import React from "react";
function Wrapper({ children, className }) {
  return (
    <div
      className={`size-full max-w-[1300px] px-12 mx-auto  max-auto flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
}
export default Wrapper;
