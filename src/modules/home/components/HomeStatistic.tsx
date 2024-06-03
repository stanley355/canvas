import Image from "next/image"

const HomeStatistic = () => {
  return (
    <div className='p-4 py-8 lg:container'>
      <div className="flex items-center justify-center gap-1 mb-4">
        <Image
          src={"/images/languageai.png"}
          alt="LanguageAi"
          width={30}
          height={30}
          className="bg-white border border-black shadow-lg "
        />
        <span className="text-lg">Languageai.id</span>
      </div>

      <div className='mb-8 text-2xl font-bold text-center lg:mb-12'>By the time you are reading this, we served more than:</div>

      <div className="lg:grid lg:grid-cols-3">
        <div className='flex justify-between gap-4 mb-8 text-xl'>
          <div className='flex flex-col items-center'>
            <div className='text-3xl font-semibold'>819</div>
            <div>Translation</div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='text-3xl font-semibold'>629</div>
            <div>Grammar Check</div>
          </div>
        </div>
        <div className='mb-8 text-xl text-center'>
          <div className='text-3xl font-semibold'>28,291</div>
          <div>Language Check</div>
        </div>

        <div className='flex justify-between gap-4 text-xl'>
          <div className='flex flex-col items-center'>
            <div className='text-3xl font-semibold'>1,813</div>
            <div>Users</div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='text-3xl font-semibold'>10,300</div>
            <div>Visitors</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeStatistic