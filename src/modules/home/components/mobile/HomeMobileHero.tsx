import Image from "next/image"
import GoogleLoginBtn from "@/modules/login/components/GoogleLoginBtn"

const HomeMobileHero = () => {
  return (
    <>
      <div className="bg-[url('/images/home/hero-background.webp')] bg-cover py-4 mb-4">
        <Image
          src={'/images/languageai.png'}
          alt='LanguageAi'
          width={200}
          height={200}
          className='p-2 mx-auto bg-white rounded-full shadow'
        />
      </div>

      <div className='px-4'>
        <h1 className='mb-4 text-4xl font-bold text-center'>Solve your language problems</h1>
        <h2 className='mb-8 text-xl text-center'>Multilanguage translation and writing, our AI gets it all covered </h2>
        <div className='flex items-center justify-center mb-8'>
          <GoogleLoginBtn />
        </div>
      </div>
    </>
  )
}

export default HomeMobileHero