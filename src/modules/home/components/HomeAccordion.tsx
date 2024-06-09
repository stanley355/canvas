import { useState } from "react";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
import { cn } from "@/common/lib/cn";
import CanvasButton from "@/common/components/ui/CanvasButton";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";

interface HomeAccordionProps {
  key: string;
  title: string;
  description: string;
}

const HomeAccordion = (props: HomeAccordionProps) => {
  const { title, description } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 bg-white rounded-lg">
      <CanvasButton
        variant="primary-reverse"
        className={cn(
          "justify-between w-full text-lg font-semibold",
          open && "rounded-b-none border-b"
        )}
        onClick={() => {
          if (!open) sendFirebaseEvent("click_home_faq");
          setOpen(!open);
        }}
      >
        <h3 className="w-4/5 text-left">{title}</h3>
        {open ? (
          <TbChevronUp className="text-3xl" />
        ) : (
          <TbChevronDown className="text-3xl" />
        )}
      </CanvasButton>

      <p
        className={cn(
          " h-0 p-0 text-black invisible",
          open && "h-auto p-4 visible"
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default HomeAccordion;
