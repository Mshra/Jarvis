import { SetStateAction } from "react";

/**
 * handles addition of prompt string to promptHistory, is one of the procedures carried out after 'onSubmit' of the string in search bar.
 *
 * @param {string} promptString - the entered prompt for AI response just after 'onSubmit'.
 * @param {Array<string>} promptHistory - the past entered prompt strings which is stored in an array.
 * @param {React.Dispatch<SetStateAction<string>>} setPromptString - changes the prompt string in search bar.
 * @param {React.Dispatch<SetStateAction<Array<string>>>} setPromptHistory - changes the prompt elements in 'promptHistory' array.
 */
function addPromptToHistory(promptString: string, promptHistory: Array<string>, setPromptString: React.Dispatch<SetStateAction<string>>, setPromptHistory: React.Dispatch<SetStateAction<Array<string>>>) {
  /**
   * If the entered prompt is already present in the past then does nothing.
   * otherwise, creates a duplicate array of the promptHistory, reverses it to present recently entered prompts at last,
   * reverses it to get them in ascending order, pushes the 'promptString' at last
   * again reverses it to have the array in descending order.
   */
  if (promptHistory.find(prompts => prompts === promptString)) { }
  else {
    const _arr = promptHistory.slice()
    _arr.reverse()
    _arr.push(promptString)
    _arr.reverse()
    setPromptHistory(_arr)
  }
  setPromptString("")
}

export {
  addPromptToHistory,
}
