import { useState } from "react";
import searchIcon from './assets/search.svg'
import { PromptHistory } from "./PromptHistory";
import { ResponseBox } from "./AI";
import { addPromptToHistory } from "./components/handleSearchBar";
import '../style.css'

export default function SearchBar() {
  const [promptHistory, setPromptHistory] = useState<Array<string>>(new Array())
  const [promptString, setPromptString] = useState<string>("")
  const [showAIresponse, setShowAIResponse] = useState<boolean>(false)
  const [showPromptHistory, setShowPromptHistory] = useState<boolean>(false)
  const [searchString, setSearchString] = useState<string>("")

  /**
   * @summary adds the entered 'promptString' to the 'promptHistory' for display and passes the 'promptString' for the generation of AI response.
   * @param {React.SyntheticEvent<HTMLFormElement>} event - event described by the submission of form.
   */
  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    addPromptToHistory(promptString, promptHistory, setPromptString, setPromptHistory)
    setShowAIResponse(true)
    setSearchString(promptString)
    setShowPromptHistory(true)
  }

  return (
    <>
      <div className="w-9/12 md:w-3/6 lg:w-2/6 flex-col relative max-h-10 min-w-8">
        <form
          onSubmit={handleSubmit}
          onMouseEnter={() => setShowPromptHistory(true)}
          onBlur={() => setShowPromptHistory(false)}
          className="flex items-center justify-center h-10 w-full p-2 border-2 border-black rounded-md group z-20 shadow-md bg-white shadow-black dark:border-white dark:bg-black dark:shadow-white">
          <input
            type="text"
            placeholder="Search with the power of AI..."
            className="outline-none w-11/12 position:absolute dark:bg-black dark:caret-white dark:text-white"
            value={promptString}
            onChange={event => setPromptString(event.target.value)} />

          <input
            type="image"
            src={searchIcon}
            alt="search"
            className="h-8" />
        </form>

        {showPromptHistory &&
          <PromptHistory setPromptString={setPromptString} promptHistory={promptHistory} setPromptHistory={setPromptHistory} />
        }

        {showAIresponse &&
          <ResponseBox searchString={searchString} setSearchString={setSearchString} setShowPromptHistory={setShowPromptHistory} setShowAIResponse={setShowAIResponse} />
        }
      </div >
    </>
  )
}
