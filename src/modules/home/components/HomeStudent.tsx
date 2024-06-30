import { TbCheck } from "react-icons/tb";
import { PiStudentDuotone } from "react-icons/pi";
import CanvasLink from "@/common/components/ui/CanvasLink";
import { sendFirebaseEvent } from "@/common/lib/firebase/sendFirebaseEvent";

const HomeStudent = () => {
  const STUDENT_ITEM = [
    "Ai Checkbot",
    "Ai Translate",
    "Ai Image to Text",
    "Ai Text to Speech",
  ];

  return (
    <div className="bg-emerald-800">
      <div className="p-4 py-8 text-white lg:container">
        <div className="mb-2 text-3xl font-semibold text-center lg:text-5xl">
          Student? Free!
        </div>
        <div className="mb-8 text-lg text-center">
          Languageai.id is built by student for student, apply and enjoy
          unlimited use
        </div>
        <CanvasLink
          href="/students/application"
          variant="primary-reverse"
          onClick={() => sendFirebaseEvent("click_home_apply_student")}
          className="w-1/2 mx-auto mb-8 text-xl border lg:w-1/4 lg:hover:bg-emerald-600 border-emerald-800 lg:border-white lg:hover:text-white"
        >
          <PiStudentDuotone />
          Apply Now
        </CanvasLink>

        <div className="mb-2 text-lg lg:text-center">What you get:</div>
        <ul className="lg:w-1/3 lg:mx-auto">
          {STUDENT_ITEM.map((item: string) => (
            <li
              className="flex items-center justify-between mb-2 text-lg"
              key={item}
            >
              <div className="flex items-center gap-2">
                <TbCheck className="bg-white rounded-full text-emerald-800" />
                <span>{item}</span>
              </div>
              <div>Unlimited</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeStudent;
