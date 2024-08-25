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
      className={`max-h-[44px] w-40 min-w-fit basis-1/2 self-end rounded-lg p-2 text-lg font-medium text-white`}
    >
      {props.customBtnText}
    </button>
  );
}

export default CustomBtn;
