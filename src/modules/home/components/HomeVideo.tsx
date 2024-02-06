
const HomeVideo = () => {
  const videoURL = 'https://firebasestorage.googleapis.com/v0/b/canvas-d06f8.appspot.com/o/Screen%20Recording%202024-02-05%20at%2018.56.45.mov?alt=media&token=ff462f3d-7ef0-4d1b-a3f1-0ed14514b5db';
  return (
    <div className="h-[55vh] lg:h-screen mb-8">
        <div className="text-3xl mb-4 border-b pb-2">(NEW and Free) Document Feature </div>
        <video controls autoPlay className="mb-8 lg:mb-0">
          <source src={videoURL} type="video/mp4" />
        </video>
        <div className='w-full lg:flex lg:flex-row-reverse lg:items-center lg:gap-4'>
          <button type="button"
            onClick={() => {
              // sendFirebaseEvent('document_video_popup_click')
              // router.push("/document/")
            }}
            className='p-2 w-full bg-blue-900 text-white mb-4 lg:mb-0 rounded-md text-lg'
          >
            Coba Langsung
          </button>
          <button type="button" className='w-full p-2 border rounded-md mt-4' onClick={() => {}}>
            Nanti deh
          </button>
        </div>
    </div>
  )
}

export default HomeVideo