export default function VideoPlayer({ videoLink }: any) {
  return (
    <div className="fixed flex justify-center w-[100%] h-[100%] bg-black text-white">
      <div className="flex relative h-s justify-center">
        <video
          className=" w-[100%] "
          height={1020}
          width={1820}
          src={videoLink}
          controls
          autoPlay
        ></video>
      </div>
    </div>
  );
}

VideoPlayer.getInitialProps = async ({ query }: any) => {
  const { videoLink } = query;

  return { videoLink };
};
