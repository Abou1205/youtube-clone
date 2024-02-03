import React, { useState } from "react";
import millify from "millify";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const {
    richThumbnail,
    thumbnail,
    channelThumbnail,
    title,
    channelTitle,
    viewCount,
    publishedTimeText,
    videoId,
  } = video;

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => navigate(`/watch?v=${videoId}`)}
      className={`cursor-pointer ${isRow && "flex gap-2 items-center"} `}
    >
      {/* fotoğraf */}
      <div>
        <img
          src={
            isHover && richThumbnail
              ? richThumbnail[richThumbnail.length - 1]?.url
              : thumbnail[thumbnail.length - 1]?.url
          }
          className={`rounded-lg w-full ${
            isRow && "max-xl:w-40 max-2xl:w-40 h-22"
          } `}
        />
      </div>
      {/* alt bilgi */}
      <div className="flex gap-4 mt-5">
        <img
          src={channelThumbnail && channelThumbnail[0]?.url}
          className={`w-14 h-14 rounded-full ${isRow && "hidden"}`}
        />
        <div className="text-[#aaa]">
          <h4 className={`font-bold text-white ${isRow && "line-clamp-1"} `}>
            {title}
          </h4>
          <p>{channelTitle}</p>
          <div className={`flex gap-2 ${isRow && "text-sm gap-1"}`}>
            <p>{millify(viewCount)} views</p>
            <p>{publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
