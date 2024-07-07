import { PromptHistoryProps } from './types.ts'

export function PromptHistory({ setPromptString, promptHistory, setPromptHistory }: PromptHistoryProps) {
  /**
   * handles the deletion of past entered prompts.
   * @param {string} index - the index of the prompt in promptHistory array which is to be deleted
   */
  const handleDeletePromptFromHistory = (index: number) => {
    const _history: Array<string> = promptHistory.slice()
    _history.splice(index, 1)
    setPromptHistory(_history)
    setPromptString("")
  }

  /**
   * @summary maps every prompts in the promptHistory array and wraps it with <li> html element that is to be returned for display inside <ul>
   * 
   */
  const mapPromptHistory = promptHistory.map((promptString, index) => {
    return (
      <li key={index} className=" overflow-y-auto my-1 px-4 flex items-center justify-center last:rounded-b-md hover:border hover:border-black dark:bg-black dark:hover:border-[#6b7280]">

        <div className="w-11/12 break-all dark:text-white" onClick={() => setPromptString(promptString)}>
          {promptString}
        </div>

        <button
          onClick={() => handleDeletePromptFromHistory(index)}
          className="px-2 py-1 m-2 border border-black rounded-sm hover:bg-red-400 text-white font-extrabold bg-red-600 hover:text-white cursor-pointer">
          X
        </button>
      </li>
    );
  });

  /**
  * returns the list of past entered prompts for display only when atleast 1 prompt exists in history
  */
  if (promptHistory.length > 0) {
    return (
      <ul className="w-full h-auto border-x-2 border-b-2 border-black -mt-2 pt-2 px-1 rounded-b-lg absolute z-10 bg-white dark:bg-black dark:border-white max-h-52 overflow-y-scroll">
        {mapPromptHistory}
      </ul>
    )
  }
}
