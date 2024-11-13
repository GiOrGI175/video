export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center  h-screen p-24'>
      <div className='text-center'>
        <h1>our cinematic</h1>
        <div className='flex items-center justify-center space-x-4'>
          <button className='px-4 py-6 bg-transparent border border-white text-xs text-white upperance'>
            our work
          </button>
          <button className='px-4 py-6 bg-transparent border border-white text-xs text-white upperance'>
            our story
          </button>
        </div>
      </div>

      <video
        src='/video.mp4'
        autoPlay
        muted
        loop
        className='absolute h-full w-full object-contain -z-10 inset-0'
      ></video>
    </main>
  );
}
