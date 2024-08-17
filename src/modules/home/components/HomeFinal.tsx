import NextLink from "@/common/components/NextLink";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import Image from "next/image";
import { useRouter } from "next/router";

const HomeFinal = () => {
  const router = useRouter();

  return (
    <section className="px-4 py-8 text-white bg-brand-primary lg:px-0">
      <h3 className="mb-4 text-3xl font-bold text-center">
        Kenapa pakai yang ini ?{" "}
      </h3>
      <div className="mb-8 text-xl text-center">
        We are a trusted Language app with users coming from
      </div>
      <div className="grid grid-cols-3 place-items-center h-[20vh] lg:w-1/2 lg:mx-auto mb-16">
        <Image
          src="/images/schools/binus.png"
          width={100}
          height={100}
          alt="Binus - Universitas Bina Nusantara"
          className="p-1 bg-white rounded-lg cursor-pointer"
          loading="lazy"
          onClick={() => router.push("/students/")}
        />
        <Image
          src="/images/schools/UGM.png"
          width={100}
          height={100}
          alt="UGM - Universitas Gajah Mada Jogjakarta cursor-pointer"
          className="p-1 bg-white rounded-lg"
          loading="lazy"
          onClick={() => router.push("/students/")}
        />
        <Image
          src="/images/schools/atma_jaya.png"
          width={100}
          height={100}
          alt="Universitas Katolik Atma Jaya Jakarta"
          className="h-full p-1 bg-white rounded-lg cursor-pointer"
          loading="lazy"
          onClick={() => router.push("/students/")}
        />
      </div>

      <NextLink
        variant="outline"
        href="/account/login"
        onClick={() =>
          sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.home_getstarted)
        }
        className="justify-center p-4 mx-auto my-8 text-xl font-bold text-brand-primary w-fit"
      >
        Let&apos;s Get Started
      </NextLink>
    </section>
  );
};

export default HomeFinal;
