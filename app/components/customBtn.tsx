import React from "react";

export interface Iprops {
  text: string;
  colorHex: string;
}
function CustomBtn(props: Iprops) {
  return (
    <button
      type="button"
      style={{ backgroundColor: `#${props.colorHex}` }}
      className={`w-40 basis-1/2 text-nowrap rounded-lg p-2 text-lg font-medium text-white`}
    >
      {props.text}
    </button>
  );
}

export default CustomBtn;
