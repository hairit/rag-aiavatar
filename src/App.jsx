import { useState } from "react";
import Button from "react-bootstrap/Button";
import Streaming from "./components/streaming";

function App() {
  const [streaming, setStreaming] = useState(false);

  return (
    <div id="app">
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        {streaming ? (
          <Streaming stop={() => setStreaming(false)} />
        ) : (
          <div className="d-flex flex-column align-items-center intro">
            <h3>RAG & HeyGen Video/Avatar Generated</h3>
            <span>Avatar Streaming</span>
            <Button
              variant="primary"
              className="mt-4 start"
              onClick={() => setStreaming(true)}
            >
              Start
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
