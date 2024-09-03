"use client";

import React from "react";

export default function FormComponent() {
  function SubmitBtn() {
    return console.log("works");
  }

  return (
    <>
      <form>
        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Enter your email"
            className="border border-solid bg-transparent px-5 py-5 text-sm font-normal placeholder:text-white"
          />
          <button
            type="button"
            className="w-full rounded-md border border-solid border-white"
            onMouseDown={SubmitBtn}
          >
            Sign Up
          </button>
        </div>
      </form>
      <p className="mt-4 text-xs font-normal">
        By signing up, you agree to the Terms of Service and Privacy Policy.
      </p>
    </>
  );
}
