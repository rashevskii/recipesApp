import { useSelector } from "react-redux";
import { RootState } from "../store";
import { AuthStack, MainStack } from "../navigation";

export const RootScreen = () => {
  const { user } = useSelector((state: RootState) => state.user);

  const renderStack = () => {
    if (user !== null) {
      return <MainStack />
    } else {
      return <AuthStack />
    }
  }

  return renderStack();
}