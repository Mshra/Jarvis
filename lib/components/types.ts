import { SetStateAction } from "react"

interface AIProps {
  searchString: string,
  setSearchString: React.Dispatch<SetStateAction<string>>,
  setShowPromptHistory: React.Dispatch<SetStateAction<boolean>>,
  setShowAIResponse: React.Dispatch<SetStateAction<boolean>>,
}

interface PromptHistoryProps {
  setPromptString: React.Dispatch<SetStateAction<string>>,
  promptHistory: Array<string>,
  setPromptHistory: React.Dispatch<SetStateAction<Array<string>>>,
}

export type { AIProps, PromptHistoryProps }
