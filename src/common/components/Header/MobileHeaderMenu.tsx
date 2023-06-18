import React from "react";
import { FaAngleRight } from "react-icons/fa";
import classNames from "classnames";
import Button from "../Button";
import { IHeaderMenu } from ".";
import { HEADER_MENU } from "./constant";

const MobileHeaderMenu = (props: IHeaderMenu) => {
  const { token } = props;

  return (
    <div className="absolute top-16 left-0 bg-black text-lg h-screen w-full px-2">
      {HEADER_MENU
        .filter(menu =>
          token ? menu.title !== "Login" : menu.title !== "Profile"
        ).map((menu, i) =>
          <Button
            type="link"
            href={menu.url}
            buttonClassName="flex items-center gap-2"
            wrapperClassName={classNames("border-b p-2", i === 0 ? "border-t" : "")}
          >
            {menu.icon}
            <span>{menu.title}</span>
            <FaAngleRight className="ml-auto" />
          </Button>
        )}
    </div>
  );
};

export default MobileHeaderMenu;
