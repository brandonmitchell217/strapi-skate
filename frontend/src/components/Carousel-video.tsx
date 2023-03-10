// use client
import React from "react";
import ReactPlayer from "react-player";

import { useWindowSize } from "usehooks-ts";

const breakpoints = [640, 768, 1024, 1280, 1536];

const videos = [
  { feature: true, url: "https://www.youtube.com/watch?v=N3s18dPCuVw" },
  { feature: false, url: "https://www.youtube.com/watch?v=N3s18dPCuVw" },
  { feature: false, url: "https://www.youtube.com/watch?v=N3s18dPCuVw" },
  { feature: false, url: "https://www.youtube.com/watch?v=N3s18dPCuVw" },
  { feature: false, url: "https://www.youtube.com/watch?v=N3s18dPCuVw" },
];

export default function VideoCarousel() {
  const { width } = useWindowSize();
  const [mainSize, setMainSize] = React.useState(String);
  const [thumbSize, setThumbSize] = React.useState(String);

  React.useEffect(() => {
    if (width < breakpoints[1]) {
      setMainSize("300px");
      setThumbSize("90px");
    } else if (width > breakpoints[2]) {
      setMainSize("500px");
      setThumbSize("150px");
    }
  }, [width, mainSize, thumbSize]);

  return (
    <div className="max-w-6xl w-full m-auto py-8 sm:py-16 px-1 sm:px-0">
      <div className="flex flex-col gap-4">
        <div className="w-full">
          {videos
            .filter((video) => video.feature === true)
            .map((video) => (
              <ReactPlayer url={video.url} height={mainSize} width={"100%"} />
            ))}
        </div>
        <div className="w-full h-28 grid grid-cols-4 gap-2">
          {videos
            .filter((video) => video.feature === false)
            .map((video) => (
              <div>
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
