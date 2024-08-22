import React from "react";

export interface Iprops {
  customBtnText: string;
  customBtnColorHex: string;
}
function CustomBtn(props: Iprops) {
  return (
    <button
      type="button"
      style={{ backgroundColor: `#${props.customBtnColorHex}` }}
      className={`w-40 basis-1/2 text-nowrap rounded-lg p-2 text-lg font-medium text-white`}
    >
      {props.customBtnText}
    </button>
  );
}

export default CustomBtn;
