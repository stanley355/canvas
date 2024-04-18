import { Button } from "@/common/components/ui/button";
import GoogleLoginBtn from "@/modules/login/components/GoogleLoginBtn";
import { useRouter } from "next/router";

const StudentsBoostGrades = () => {
  const router = useRouter();
  return (
    <div className="py-8 bg-indigo-900">
      <div className="container mx-auto text-white lg:mb-8">
        <div className="mb-4 text-center">For students</div>
        <div className="mb-4 text-3xl font-semibold text-center">
          Boost Your Grades With Better Writing
        </div>
        <div className="mb-4 text-center lg:w-1/3 lg:mx-auto">
          Join thousand of students worldwide who use Grammarly to improve their
          writing and achieve their goals.
        </div>
      </div>
      <div className="px-4 mb-4 lg:flex lg:mx-auto lg:w-1/2 lg:justify-evenly">
        <Button
          className="w-full p-6 mb-6 text-lg text-indigo-900 bg-white border shadow-lg lg:text-md lg:p-4 lg:w-1/3 hover:bg-gray-200"
          onClick={() => router.push("/login")}
        >
          Sign up it&apos;s free
        </Button>
        <GoogleLoginBtn />
      </div>
    </div>
  );
};

export default StudentsBoostGrades;
