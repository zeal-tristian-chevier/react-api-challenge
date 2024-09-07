import React from "react";
const VideoBackground = () => {
    return (
        <div className="-z-10 opacity-70 ">
            <h2
                className="absolute top-1/4 left-1/2 -translate-x-[43%] hidden sm:block sm:text-3xl md:text-4xl lg:text-6xl z-10"
                style={{
                    fontFamily: "Kanit",
                    fontWeight: 700,
                }}
            >
                Begin your news search in the comfort of your own home.
            </h2>
            <video
                autoPlay
                loop
                muted
                className="video-background border"
                src={"/search-news-video.mp4"}
            ></video>
        </div>
    );
};
export default VideoBackground;
