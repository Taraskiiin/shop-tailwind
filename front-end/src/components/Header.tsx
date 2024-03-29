import React from "react";

import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="h-[80px] flex items-center justify-center mb-[20px]">
      <Link to="/">
        <h1 className="w-fit mx-auto flex flex-col gap-[12px] text-center font-serif text-primary">
          <span className="uppercase text-xs font-[500]">
            the innovation leader in real man toys
          </span>
          <span className="capitalize text-6xl font-[600]">
            let's get started
          </span>
        </h1>
      </Link>
    </header>
  );
};
