import { useState } from "react";
import { AIProps } from "./types.ts";
import { marked } from "marked";
import { fetchResponse } from "./components/handleAI.ts";

/**
 * Returns a div box that displays the response for the prompt entered by user.
 */
export function ResponseBox({ searchString, setSearchString, setShowPromptHistory, setShowAIResponse }: AIProps) {
  const [response, setResponse] = useState<string>("")

  /**
   * starts the LLM response generation only when searchString is present.
   */
  if (searchString) {
    fetchResponse(searchString, setResponse)
    setSearchString("")
  }

  /**
   * Takes the response as markdown and converts it to html and returns it with by wrapping it inside a div.
   */
  const MarkdownDisplay = ({ response }: { response: string }) => {
    const getMarkdownText = () => {
      const rawMarkup = marked(response);
      return { __html: rawMarkup };
    };
    return <div className="dark:bg-black max-h-96 mx-4 overflow-x-auto dark:text-white" dangerouslySetInnerHTML={getMarkdownText()} />;
  }

  return (
    <div
      onMouseEnter={() => setShowPromptHistory(false)}
      className="w-full h-auto border-2 p-2 mt-2 border-black rounded-lg absolute z-0 bg-white dark:bg-black dark:border-white shadow-md shadow-black dark:shadow-white">

      <div className="flex justify-evenly p-2">
        <button className="border border-black hover:bg-red-400 bg-red-600 text-white p-2 rounded-lg dark:border-[#6b7280] shadow-inner hover:shadow-gray-800 font-serif" onClick={() => setShowAIResponse(false)}>Close</button>
        <button className="border border-black hover:bg-gray-400 bg-gray-600 text-white p-2 rounded-lg cursor-pointer dark:border-[#6b7280] shadow-inner hover:shadow-black font-serif" onClick={() => navigator.clipboard.writeText(response)}>Copy to clipboard</button>
      </div>

      <MarkdownDisplay response={response} />
    </div>
  )
}
