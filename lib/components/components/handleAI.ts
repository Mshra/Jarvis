import { SetStateAction } from "react"

/**
 * @summary function that fetches the LLM generated response for the 'searchString'.
 * @param searchString: prompt entered by the user in search bar.
 * @param setResponse: sets the response for the searchString to display.
  */
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
