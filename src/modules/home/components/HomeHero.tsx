import Image from "next/image"
import NextLink from "@/common/components/NextLink"

const HomeHero = () => {
  return (
    <div className="p-4 lg:grid grid-cols-2 place-items-center container mx-auto lg:px-0 h-[87.5vh] lg:h-[90vh] ">
      <div className="mb-8">
        <Image
          src="/images/languageai/logo.png"
          alt="Languageai"
          width={150}
          height={65}
          className=" hidden lg:block mb-4"
        />
        <h1 className="text-4xl lg:text-5xl text-center font-bold mb-8 lg:text-left">
          Kalau ada yang <i>lain </i>,
        kenapa pakai yang <i>ini </i> ?
        </h1>
        <NextLink href="#home_features" className="mx-auto w-fit text-xl lg:mx-0">Tell me why</NextLink>
      </div>
      <Image
        src="/images/home/hero.webp"
        alt="Languageai why?"
        width={400}
        height={400}
        className="w-full h-auto rounded-lg"
      />
    </div>
  )
}

export default HomeHero