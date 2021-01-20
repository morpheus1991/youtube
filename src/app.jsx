import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";
function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    console.log("useEffect");

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=bts&key=AIzaSyD9sXQSxIOLsUs-rrGud6npbWUpMoH8ONw",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return <VideoList videos={videos} />;
}

export default App;
