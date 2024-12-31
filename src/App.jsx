import { useState } from "react";
import Button from "react-bootstrap/Button";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div id="app">
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        {start ? (
          <div className="session"></div>
        ) : (
          <div className="d-flex flex-column align-items-center intro">
            <h3>RAG & HeyGen Video/Avatar Generated</h3>
            <span>Avatar Streaming API + LiveKit</span>
            <Button variant="primary" className="mt-4">
              Start Demo
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
