import StreamingAvatar from "@heygen/streaming-avatar";

export const createToken = async () => {
  const apiKey = import.meta.env.VITE_API_KEY_HEYGEN;
  const response = await fetch(
    "https://api.heygen.com/v1/streaming.create_token",
    {
      method: "POST",
      headers: { "x-api-key": apiKey },
    }
  );

  const { data } = await response.json();
  return data.token;
};

export const createStreamingAvatar = async (onCreate) => {
  try {
    const token = await createToken();
    const avatar = new StreamingAvatar({ token });
    if (typeof onCreate === "function") {
      await onCreate(avatar);
    }
    return avatar;
  } catch (error) {
    throw error;
  }
};
