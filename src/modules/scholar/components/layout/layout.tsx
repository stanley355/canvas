import React from "react";
import Link from "next/link";
import { FaBuffer, FaUserCircle } from "react-icons/fa";

const ScholarPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <nav className="p-4 flex flex-row items-center justify-between border-b border-white">
        <button type="button">
          <FaBuffer className="text-3xl" />
        </button>
        <Link href="/login">
          <FaUserCircle className="text-3xl" />
        </Link>
      </nav>
      {children}
    </section>
  );
};

export default ScholarPageLayout;
