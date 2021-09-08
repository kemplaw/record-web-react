import { useHistory } from "react-router-dom";

export const useHistoryBack = () => {
  const history = useHistory()
  const onBack = () => {
    history.goBack()
  }

  return {
    onBack
  }
}