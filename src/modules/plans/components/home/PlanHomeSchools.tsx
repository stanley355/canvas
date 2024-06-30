import Image from 'next/image'

const PlanHomeSchools = () => {
  return (
    <div className='mb-12'>
      <div className='text-lg text-center font-semibold mb-2'>Trusted by students from</div>

      <div className='grid grid-cols-3 place-items-center h-[20vh] lg:w-1/2 lg:mx-auto'>
        <Image
          src="/images/schools/binus.png"
          width={100}
          height={100}
          alt='Binus - Universitas Bina Nusantara'
        />
        <Image
          src="/images/schools/UGM.png"
          width={100}
          height={100}
          alt='UGM - Universitas Gajah Mada Jogjakarta'
        />
        <Image
          src="/images/schools/atma_jaya.png"
          width={100}
          height={100}
          alt='Universitas Katolik Atma Jaya Jakarta'
          className='h-full'
        />

      </div>
    </div>
  )
}

export default PlanHomeSchools