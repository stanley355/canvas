import NextLink from "@/common/components/NextLink";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import Image from "next/image";
import { useRouter } from "next/router";

const StudentsHero = () => {
  const router = useRouter();

  return (
    <div className=" bg-brand-primary w-full p-4 text-white  lg:px-0">
      <div className="lg:grid lg:grid-cols-2 container lg:gap-24">
        <div className="lg:pt-24">
          <h1 className="text-lg my-8">Languageai for Students</h1>
          <h2 className="text-3xl w-3/4 mb-4 lg:font-bold">
            One AI for your assignments
          </h2>
          <p className="mb-8">
            Languageai translates your work, checks your texts, and rewrites
            your sentences. Utilize AI Checkbot to fix your grammar, spelling,
            and provide correction for you.
          </p>
          <NextLink
            href="/students/application"
            variant="outline"
            onClick={() =>
              sendFirebaseEvent(
                FIREBASE_EVENT_NAMES.click.student_home_hero_cta
              )
            }
            className="text-brand-primary py-4 w-fit bg-gradient-to-b from-white to-blue-100 hover:to-blue-200 text-lg font-semibold"
          >
            Apply Student Plan
          </NextLink>
          <div className="text-left mt-4 lg:w-1/2">
            By signing up, you agree to the <b>Terms and Conditions</b> and{" "}
            <b> Privacy Policy</b>.
          </div>
        </div>

        <Image
          src="/images/students/home-hero-mobile.png"
          alt="Languageai for Students"
          width={400}
          height={400}
          className="my-4 rounded-lg w-full cursor-pointer"
          onClick={() => router.push("/students/application/")}
        />
      </div>
    </div>
  );
};

export default StudentsHero;
