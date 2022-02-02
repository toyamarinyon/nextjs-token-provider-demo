import type { NextPage } from "next";
import { useContext } from "react";
import { AuthContext } from "../components/authProvider";

const Home: NextPage = () => {
  const state = useContext(AuthContext);
  return (
    <div>
      <h1>ProviderでのidToken更新と動画再生</h1>
      <p>
        current idToken is <span>{state.idToken}</span>
      </p>
      <h2>html video tag</h2>
      <video src="/video.mp4" controls />
      <h2>YouTube(iframe)</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Nkt93coQzqg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Home;
