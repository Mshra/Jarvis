import { SetStateAction } from "react"

async function fetchResponse(searchString: string, setResponse: React.Dispatch<SetStateAction<string>>) {
  const searchStringAsJSON = {
    "prompt": searchString,
  }

  const prompt = new URLSearchParams(searchStringAsJSON).toString()
  const url = `https://jarvisapi-w33w.onrender.com/api?${prompt}`

  await fetch(url)
    .then(response => response.json())
    .then(JSONresponse => setResponse(JSONresponse.AIresponse))
    .catch(error => console.log(error));
}

export { fetchResponse }
