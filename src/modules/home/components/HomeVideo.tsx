
const HomeVideo = () => {
  const videoURL = 'https://firebasestorage.googleapis.com/v0/b/canvas-d06f8.appspot.com/o/Screen%20Recording%202024-02-05%20at%2018.56.45.mov?alt=media&token=ff462f3d-7ef0-4d1b-a3f1-0ed14514b5db';
  return (
    <div className="h-[40vh] lg:h-screen mb-12">

      <div className="text-3xl border-b pb-2 mb-4 ">(NEW and Free) Document Feature </div>
      <video controls autoPlay>
        <source src={'/document_video.mov'} type="video/mp4" />
      </video>
    </div>
  )
}

export default HomeVideo