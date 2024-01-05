import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { getData } from "../getData";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import millify from "millify";
import StringArea from "../components/StringArea";
import Loader from "../components/Loader";
import VideoCard from "../components/VideoCard";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);

  const [comments, setComments] = useState(null);
  // url den arama parametresi alma
  const [searchParams] = useSearchParams();

  // ismine göre parametrenin değerine erişme
  const id = searchParams.get("v");

  // id sini bildiğimiz video için api isteği atma
  useEffect(() => {
    setVideo(null);

    getData(`/video/info?id=${id}&extend=1`).then((data) => setVideo(data));
    getData(`/comments?id=${id}`).then((data) => setComments(data));
  }, [searchParams]);

  return (
    <div className="detail-page">
      <div>
        <ReactPlayer
          width={"100%"}
          height={"50vh"}
          controls
          playing
          url={`https://www.youtube.com/watch?v=${id}`}
        />

        {!video ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1 className="my-3 text-xl font-bold">{video.title}</h1>
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-12 h-12"
                  src={
                    video.channelThumbnail[video.channelThumbnail.length - 1]
                      .url
                  }
                  alt=""
                />
                <div>
                  <h4 className="font-bold">{video.channelTitle}</h4>
                  <p className="text-gray-400">{video.subscriberCountText}</p>
                </div>
                <button className="bg-white rounded-full text-black px-3 h-9 transition hover:bg-gray-400">
                  Abone Ol
                </button>
              </div>

              <div className="flex items-center bg-[#272727] rounded-full cursor-pointer">
                <div className="flex items-center gap-3 py-2 px-4 border-r">
                  <AiFillLike />
                  <p>{video.likeCount}</p>
                </div>
                <div className="py-2 px-4">
                  <AiFillDislike />
                </div>
              </div>
            </div>
            <div className="bg-[#272727] rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80 ">
              <div className="flex gap-3">
                <p>{millify(video.viewCount)} Views</p>
                <p>{new Date(video.publishDate).toLocaleDateString()}</p>
              </div>
              <StringArea text={video.description} />
            </div>

            {comments?.commentsCount && (
              <h1 className="my-6 flex gap-5 pl-5 font-bold">
                {comments?.commentsCount} comments
              </h1>
            )}

            {comments?.data.map((comment,index) => (
                <div key={index} className="flex my-4 gap-4">
                  <div>
                    <img
                      className="rounded-full w-12 h-12"
                      src={comment.authorThumbnail[0].url}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-4">
                      <span>{comment.authorText}</span>
                      <span>{comment.publishedTimeText}</span>
                    </p>
                    <p>{comment.textDisplay}</p>
                    <div>
                      <span className="flex justify-start items-center gap-2">
                        {" "}
                        <BiLike /> {comment.likesCount}
                      </span>
                    </div>
                  </div>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="flex flex-col gap-5 p-3 md:order-1">
        {!video ? (
          <Loader />
        ) : (
          video.relatedVideos.data.map(
            (item,index) =>
              item.type === "video" && <VideoCard key={index} isRow={true} video={item} />
          )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
