"use client";

import React from "react";

export interface I_customBtn {
  customBtnText: string;
  customBtnColorHex: string;
}
function CustomBtn(props: I_customBtn) {
  return (
    <button
      type="button"
      style={{ backgroundColor: `#${props.customBtnColorHex}` }}
      className={`max-h-[32px] w-28 basis-1/2 self-end rounded-lg p-2 text-xs font-medium text-white md:max-h-[44px] md:w-40 md:text-lg`}
      onMouseDown={() => console.log("button pressed c")}
    >
      {props.customBtnText}
    </button>
  );
}

export default CustomBtn;
