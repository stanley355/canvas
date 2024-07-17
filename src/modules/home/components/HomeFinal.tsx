import NextLink from "@/common/components/NextLink";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import Image from "next/image";
import { useRouter } from "next/router";

const HomeFinal = () => {
  const router = useRouter();

  return (
    <div className="bg-brand-primary text-white py-8 px-4 lg:px-0">
      <h3 className="text-3xl font-bold mb-4 text-center">
        Kenapa pakai yang ini ?{" "}
      </h3>
      <div className="text-center text-xl mb-8">
        We are a trusted Language app with users coming from
      </div>
      <div className="grid grid-cols-3 place-items-center h-[20vh] lg:w-1/2 lg:mx-auto mb-16">
        <Image
          src="/images/schools/binus.png"
          width={100}
          height={100}
          alt="Binus - Universitas Bina Nusantara"
          className="bg-white rounded-lg p-1 cursor-pointer"
          onClick={() => router.push("/students/")}
        />
        <Image
          src="/images/schools/UGM.png"
          width={100}
          height={100}
          alt="UGM - Universitas Gajah Mada Jogjakarta cursor-pointer"
          className="bg-white rounded-lg p-1"
          onClick={() => router.push("/students/")}
        />
        <Image
          src="/images/schools/atma_jaya.png"
          width={100}
          height={100}
          alt="Universitas Katolik Atma Jaya Jakarta"
          className="h-full bg-white rounded-lg p-1 cursor-pointer"
          onClick={() => router.push("/students/")}
        />
      </div>

      <NextLink
        variant="outline"
        href="/login"
        onClick={() =>
          sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.home_getstarted)
        }
        className="text-brand-primary mx-auto text-xl font-bold justify-center w-fit p-4 my-8"
      >
        Let&apos;s Get Started
      </NextLink>
    </div>
  );
};

export default HomeFinal;
