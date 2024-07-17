import Image from "next/image";
import NextLink from "@/common/components/NextLink";
import { sendFirebaseEvent } from "@/modules/firebase/lib/sendFirebaseEvent";
import { FIREBASE_EVENT_NAMES } from "@/modules/firebase/lib/firebaseEventNames";
import { useRouter } from "next/router";

const HomeHero = () => {
  const router = useRouter();
  return (
    <div className="p-4 lg:grid grid-cols-2 place-items-center container mx-auto lg:px-0 lg:h-[90vh] ">
      <div className="mb-8">
        <div className="text-xl text-center mb-2 lg:text-left lg:text-lg">
          Translate, Grammar Check, Paraphrase in 50 LANGUAGES
        </div>
        <h1 className="text-4xl lg:text-5xl text-center font-bold mb-8 lg:text-left">
          Kalau ada yang <i>lain </i>, kenapa pakai yang <i>ini </i> ?
        </h1>
        <NextLink
          href="#home_features"
          onClick={() =>
            sendFirebaseEvent(FIREBASE_EVENT_NAMES.click.home_tellmewhy)
          }
          className="mx-auto w-fit text-xl lg:mx-0"
        >
          Tell me why
        </NextLink>
      </div>
      <Image
        src="/images/home/hero.webp"
        alt="Languageai why?"
        width={400}
        height={400}
        className="w-full h-auto lg:max-h-none rounded-lg cursor-pointer"
        onClick={() => router.push("/#home_features")}
      />
    </div>
  );
};

export default HomeHero;
