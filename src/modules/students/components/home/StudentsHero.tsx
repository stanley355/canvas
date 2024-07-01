import NextLink from '@/common/components/NextLink';
import GoogleLoginBtn from '@/modules/login/components/GoogleLoginBtn'
import Cookies from 'js-cookie'
import Image from 'next/image';

const StudentsHero = () => {
  const token = Cookies.get('token');
  return (
    <div className=" bg-brand-primary w-full bg-cover  p-4 text-white">
      <div>
        <h1 className='text-lg my-8'>Languageai for Students</h1>
        <h2 className='text-3xl w-3/4 mb-4'>One AI for your assignments</h2>
        <h3 className='mb-8'>Languageai can translate your work, check your texts, and rewrite your sentences. Utilize AI Checkbot to check your grammar, spelling, and provide correction for you.</h3>
        {token ?
          <NextLink href="/students/application" variant='outline' className='text-brand-primary py-4 w-fit bg-gradient-to-b from-white to-blue-100 text-lg font-semibold'>Apply Student Plan</NextLink> :
          <GoogleLoginBtn />}
        <div className="text-left mt-4">
          By signing up, you agree to the <b>Terms and Conditions</b> and{" "}
          <b> Privacy Policy</b>.
        </div>
      </div>

      <Image
        src="/images/students/home-hero-mobile.png"
        alt='Languageai for Students'
        width={400}
        height={400}
        className='my-4 rounded-lg w-full h-auto'
      />
    </div>
  )
}

export default StudentsHero