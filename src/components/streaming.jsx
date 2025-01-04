import { getAnswer } from "./../utilities/rag";
import { Button, Spinner } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import { createStreamingAvatar } from "../utilities/heyGen";
import {
  TaskType,
  AvatarQuality,
  StreamingEvents,
} from "@heygen/streaming-avatar";

export default function streaming({ stop }) {
  const avatarVideo = useRef(null);

  const [text, setText] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    streamingReady({});
    setLoading(true);
    createStreamingAvatar(onCreate)
      .then((_) => setAvatar(_))
      .catch((error) => `Unable to create streaming avatar. ${error.message}`)
      .finally(() => setLoading(false));
  }, []);

  const onCreate = async (createdAvatar) => {
    await createdAvatar.createStartAvatar({
      quality: AvatarQuality.High,
      avatarName: "Wayne_20240711",
      language: "English",
    });
    createdAvatar.on(StreamingEvents.STREAM_READY, streamingReady);
  };

  const streamingReady = (event) => {
    if (avatarVideo?.current && event.detail) {
      avatarVideo.current.srcObject = event.detail;
      avatarVideo.current.onloadedmetadata = () =>
        avatarVideo.current.play().catch(console.error);
    } else {
      console.error("Stream is not available");
    }
  };

  const submit = async () => {
    let question = text?.trim();
    if (!avatar || !question) return;
    let answer = await getAnswer(text.trim());
    if (answer?.text) {
      setText(null);
      avatar.speak({
        text: answer.text,
        task_type: TaskType.REPEAT,
      });
    } else {
      avatar.speak({
        text: "Say a apology when you cannot answer a question",
      });
    }
  };

  return (
    <div className="d-flex flex-column align-items-center streaming">
      <article>
        {loading ? (
          <Spinner animation="border" role="status" />
        ) : (
          <video
            ref={avatarVideo}
            id="avatarVideo"
            autoPlay
            playsInline
          ></video>
        )}
      </article>
      <div className="mt-2 w-100 text-center">
        <div className="d-flex control">
          <input
            className="flex-grow-1"
            placeholder="Type something..."
            onChange={(e) => setText(e.target.value)}
          />
          <button disabled={loading || !text} onClick={submit}>
            Submit
          </button>
        </div>
        <Button
          variant="primary"
          className="mt-4 stop"
          disabled={loading}
          onClick={stop}
        >
          Stop
        </Button>
      </div>
    </div>
  );
}
