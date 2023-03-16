import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const useWindowSize = process.browser && require("usehooks-ts").useWindowSize;

const breakpoints = [640, 768, 1024, 1280, 1536];

export default function VideoCarousel() {
  // TODO: Perhaps move this breakpoint/sizing stuff to the actual page
  const { width } = useWindowSize ? useWindowSize() : { width: undefined };
  const [mainSize, setMainSize] = React.useState("500px");
  const [thumbSize, setThumbSize] = React.useState("150px");

  React.useEffect(() => {
    if (width && width < breakpoints[1]) {
      setMainSize("300px");
      setThumbSize("90px");
    } else if (width && width > breakpoints[2]) {
      setMainSize("500px");
      setThumbSize("150px");
    }
  }, [width]);

  const videos = [
    { feature: true, url: "https://www.youtube.com/watch?v=N3s18dPCuVw" },
    { feature: false, url: "https://www.youtube.com/watch?v=N3s18dPCuVw" },
    { feature: false, url: "https://www.youtube.com/watch?v=N3s18dPCuVw" },
    { feature: false, url: "https://www.youtube.com/watch?v=N3s18dPCuVw" },
    { feature: false, url: "https://www.youtube.com/watch?v=N3s18dPCuVw" },
  ];

  return (
    <div className="max-w-6xl w-full m-auto py-8 sm:py-16 px-1 sm:px-0">
      <div className="flex flex-col gap-4">
        <div className="w-full">
          {videos
            .filter((video) => video.feature === true)
            .map((video) => (
              <ReactPlayer
                key={video.url}
                url={video.url}
                height={mainSize}
                width={"100%"}
              />
            ))}
        </div>
        <div className="w-full h-28 grid grid-cols-4 gap-2">
          {videos
            .filter((video) => video.feature === false)
            .map((video, i) => (
              <div key={i}>
                <ReactPlayer
                  url={video.url}
                  height={thumbSize}
                  width={"100%"}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
