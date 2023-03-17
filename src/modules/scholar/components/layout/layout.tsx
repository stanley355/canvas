import React from "react";
import { FaBuffer } from "react-icons/fa";

const ScholarPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <nav>
        <FaBuffer />
      </nav>
      {children}
    </section>
  );
};

export default ScholarPageLayout;
