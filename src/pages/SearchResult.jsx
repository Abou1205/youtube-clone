import { useSearchParams } from "react-router-dom"
import Sidebar from "../components/SideBar"
import { useEffect, useState } from "react"
import { getData } from "../getData"
import Loader from "../components/Loader"
import VideoCard from "../components/VideoCard"

const SearchResult = () => {
  const [result,setResult] = useState(null)

  const [searchParams] = useSearchParams()

  const query = searchParams.get('search_query')

  useEffect(() => {

    setResult(null)

    getData(`/search?query=${query}&type=video`)
      .then((data) => setResult(data))
  },[query])

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex justify-center flex-1 p-4">
        <div className="flex flex-col max-w-lg gap-10">
          <p className="text-lg">
            <span className="font-bold">{query}</span> için sonuçlar
          </p>
          {!result ? <Loader/> : result.data.map((item,i) => item.type === "video" && <VideoCard key={i} video={item} />)}
        </div>
      </div>
    </div>
  )
}

export default SearchResult