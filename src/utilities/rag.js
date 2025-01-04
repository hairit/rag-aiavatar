export const getAnswer = async (question) => {
  let answer = null;
  await fetch("https://payload.vextapp.com/hook/D3C3T4ZEUB/catch/hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Apikey: `Api-Key ${import.meta.env.VITE_API_KEY_RAG}`,
    },
    body: JSON.stringify({ payload: question }),
  })
    .then((response) => {
      if (response.ok) {
        answer = response.json();
      } else {
        throw new Error("Request failed with status " + response.status);
      }
    })
    .catch((error) => console.error("Error making API call:", error));
  return answer;
};
