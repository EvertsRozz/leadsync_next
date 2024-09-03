import React from "react";

export default function FooterComponent() {
  return (
    <footer className="mb-20 w-full">
      <div className="border-b border-solid">
        <div className="flex items-center justify-center">
          <p>Temporary logo text</p>
        </div>
        <div className="mb-20 mt-8 flex items-center justify-center gap-5 text-base font-medium">
          <a href="#">Link One</a>
          <a href="#">asdf</a>
          <a href="#">fdaa</a>
          <a href="#">asfdasdf</a>
          <a href="#">asdfasdf</a>
        </div>
      </div>
      <div className="mt-8 flex w-full justify-between text-xs font-medium">
        <p>
          <span className="font-extralight">&#169;</span> 2024 LeadSync. All
          rights reserved
        </p>
        <div className="flex gap-5">
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
          <a href="">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}
