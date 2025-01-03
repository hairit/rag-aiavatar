import { useState } from "react";
import Streaming from "./components/streaming";
import Button from "react-bootstrap/Button";

// const heyGenUrl = "https://api.heygen.com";
// const heyGenApiKey =
//   "MDEwZDhiMDJjNDFmNDY0ZGJmYzMyOTgzNDQ3NDBhNGMtMTczNTQ1MjE3MQ==";

function App() {
  const [streaming, setStreaming] = useState(false);

  return (
    <div id="app">
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        {streaming ? (
          <Streaming exit={() => setStreaming(false)} />
        ) : (
          <div className="d-flex flex-column align-items-center intro">
            <h3>RAG & HeyGen Video/Avatar Generated</h3>
            <span>Avatar Streaming API + LiveKit</span>
            <Button
              variant="primary"
              className="mt-4"
              onClick={() => setStreaming(true)}
            >
              Start Demo
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
