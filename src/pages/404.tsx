import Image from 'next/image';
import { useRouter } from 'next/router';
import { Button } from '@/common/components/ui/button';

const NotFound = () => {
  const router = useRouter();
  return (
    <div className='container flex flex-col items-center min-h-screen mx-auto my-16'>
      <Image src={'/images/404.webp'} alt='LanguageAi' width={75} height={100} className='w-full h-auto lg:w-1/6' />

      <Button onClick={() => router.back()} >
        Go Back
      </Button>
    </div>
  )
}

export default NotFound;