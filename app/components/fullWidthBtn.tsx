"use client";

import React from "react";

export interface I_fullWidthBtn {
  customBtnText: string;
  customBtnColorHex: string;
}
function FullWidthBtn(props: I_fullWidthBtn) {
  return (
    <button
      type="button"
      style={{ backgroundColor: `${props.customBtnColorHex}` }}
      className={`max-h-[44px] w-full basis-1/2 self-end rounded-lg p-2 text-lg font-medium text-white`}
    >
      {props.customBtnText}
    </button>
  );
}

export default FullWidthBtn;
