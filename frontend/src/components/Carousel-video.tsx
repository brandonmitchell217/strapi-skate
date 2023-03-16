import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const useWindowSize = process.browser && require("usehooks-ts").useWindowSize;

const breakpoints = [640, 768, 1024, 1280, 1536];

interface VideoProps {
  link: string | undefined;
  title: string | undefined;
}

interface VideoCarouselProps {
  videos: VideoProps[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const { width } = useWindowSize ? useWindowSize() : { width: undefined };
  const [mainSize, setMainSize] = React.useState("500px");
  const [thumbSize, setThumbSize] = React.useState("150px");
  const [featuredVideoIndex, setFeaturedVideoIndex] = React.useState(0);

  console.log(videos);

  React.useEffect(() => {
    if (width && width < breakpoints[1]) {
      setMainSize("300px");
      setThumbSize("90px");
    } else if (width && width > breakpoints[2]) {
      setMainSize("500px");
      setThumbSize("150px");
    }
  }, [width]);

  const handleVideoClick = (index: number) => {
    console.log(index);
    setFeaturedVideoIndex(index);
  };

  return (
    <div className="max-w-6xl w-full m-auto py-8 sm:py-16 px-1 sm:px-0">
      <div className="flex flex-col gap-4">
        <div className="w-full">
          {featuredVideoIndex !== null && (
            <ReactPlayer
              url={videos[featuredVideoIndex].link}
              height={mainSize}
              width={"100%"}
            />
          )}
        </div>
        <div className="w-full h-28 grid grid-cols-4 gap-2">
          {videos.map((video, index) => (
            <div key={index} onClick={() => handleVideoClick(index)}>
              <ReactPlayer
                url={video.link}
                height={thumbSize}
                width={"100%"}
                light={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
