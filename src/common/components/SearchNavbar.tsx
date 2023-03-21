import React from "react";
import { useDesktopScreen } from "../hooks/useDesktopScreen";
import Button from "./Button";
import SearchBox from "./SearchBox";
import SideNavbarBtn from "./SideNavbarBtn";

interface ISearchNavbar {
  pageTitle: string;
  basePagePath: string;
  pageIcon: React.ReactNode;
  searchPlaceHolder: string;
  onSearchSubmit: (val: string) => void;
}

const SearchNavbar = (props: ISearchNavbar) => {
  const {
    pageTitle,
    basePagePath,
    pageIcon,
    searchPlaceHolder,
    onSearchSubmit,
  } = props;

  const isDesktop = useDesktopScreen();

  return (
    <nav className="py-4 px-2 border-b border-white flex flex-row items-center justify-between">
      <Button
        type="link"
        href={basePagePath}
        title={pageTitle}
        children={pageIcon}
      />
      <SearchBox placeholder={searchPlaceHolder} onSubmit={onSearchSubmit} />
      {isDesktop && <SideNavbarBtn />}
    </nav>
  );
};

export default SearchNavbar;
