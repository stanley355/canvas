import Image from "next/image";
import React from "react";

const StudentsAssignmentBenefit = () => {
  return (
    <div className="container px-4 py-8 mx-auto lg:px-16">
      <div className="mb-4 text-2xl font-bold text-center">
        Ace Your Assignments With Responsible AI
      </div>
      <div className="mb-16 text-center lg:mb-12 lg:w-1/2 lg:mx-auto">
        When your writing improves, your grades do, too. LanguageAi supports you
        at every step of the writing process with real-time feedback and AI that
        helps your skills grow over time.
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mb-12 ">
          <Image
            width={400}
            height={400}
            className="w-full h-auto mb-4"
            alt="LanguageAi Write Strategic"
            src="/images/students/write_strategic.webp"
          />
          <div className="mb-4 text-2xl font-semibold">Write strategically</div>
          <div>
            LanguageAi identifies your key points and helps you develop them so
            you can solidify your thesis and make your ideas flow logically.
          </div>
        </div>
        <div className="mb-12 lg:max-h-80">
          <Image
            width={400}
            height={400}
            className="w-full mb-4 h-80 lg:max-h-80"
            alt="LanguageAi Edit and Click"
            src="/images/students/edit_click.webp"
          />
          <div className="mb-4 text-2xl font-semibold">Edit in one click</div>
          <div>
            Be confident and clear with generative AI that helps you tighten up
            wordy passages.
          </div>
        </div>
        <div className="mb-12">
          <Image
            width={400}
            height={400}
            className="w-full h-auto mb-4 lg:max-h-80"
            alt="LanguageAi Write Strategic"
            src="/images/students/citation.webp"
          />
          <div className="mb-4 text-2xl font-semibold">
            Boost your writing Resources
          </div>
          <div>
            Fuel your academic and future success by learning how to responsibly
            use generative AI to strengthen your ideas and sharpen your writing.
          </div>
        </div>
        <div className="mb-12">
          <Image
            width={400}
            height={400}
            className="w-full h-auto mb-4 lg:max-h-80"
            alt="LanguageAi Work to work"
            src="/images/home/work_where_cartoon.webp"
          />
          <div className="mb-4 text-2xl font-semibold">
            Works where you work
          </div>
          <div>
            LanguageAi works for all writing and languages. Copy and paste
            without hassle.
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsAssignmentBenefit;
