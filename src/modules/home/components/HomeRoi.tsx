import { Button } from "@/common/components/ui/button";
import GoogleLoginBtn from "@/modules/login/components/GoogleLoginBtn";
import { useRouter } from "next/router";

const HomeRoi = () => {
  const router = useRouter();
  return (
    <div className="py-8 bg-emerald-700">
      <div className="container mx-auto text-white lg:mb-8">
        <div className="mb-4 text-center">For individual</div>
        <div className="mb-4 text-3xl font-semibold text-center">
          What&apos;s the ROI on Better Writing?
        </div>
        <div className="mb-4 text-center lg:w-1/3 lg:mx-auto">
          17x. Organizations that use LanguageAi save an average of
          Rp125,000,000 per employee per year. Data stays private, productivity
          rises, inbox numbers drop, and teams can focus on what they should do,
          not on how they should say it.
        </div>
      </div>
      <div className="px-4 mb-4 lg:flex lg:mx-auto lg:w-1/2 lg:justify-evenly">
        <Button
          className="w-full p-6 mb-6 text-lg text-white border border-white shadow-lg lg:text-md lg:p-4 lg:w-1/3 bg-emerald-700 hover:bg-emerald-600"
          onClick={() => router.push("/login")}
        >
          Sign up it&apos;s free
        </Button>
        <GoogleLoginBtn />
      </div>
    </div>
  );
};

export default HomeRoi;
