import React from "react";
import Button from "./Button";
import { FaRadiation } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full p-4 border-b">
      <Button
        type="button"
        title="LangAI"
        wrapperClassName="text-2xl font-semibold"
        buttonClassName="flex flex-row items-center"
      >
        <FaRadiation className="border rounded-full mr-2" />
        <span>LangAI</span>
      </Button>
    </header>
  );
};

export default Header;
