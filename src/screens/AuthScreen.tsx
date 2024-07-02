import React from "react"
import { 
  Pressable,
  StyleSheet,
  Text,
  View
} from "react-native";
import {
  useDispatch,
  useSelector
} from "react-redux";
import { RootState } from "../store";
import { text } from "../resources";
import { loginUser } from "../store/slices/userSlice";
import { Button } from "../components/Button";

export const AuthScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const mockUser = {
    user: {
      name: "Test",
      email: "test@test.ru",
      id: "1234"
    }
  }

  const onSignIn = () => {
    dispatch(loginUser(mockUser));
  }


  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <Button onPress={() => console.log("press")} text={text.buttons.signUp} />
        <Button onPress={onSignIn} text={text.buttons.signIn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flexDirection: "column",
  },
});
