import { Pressable, StyleSheet, Text } from "react-native";

export type ButtonPropsType = {
  onPress: () => void;
  text: string;
}

export const Button = ({ onPress, text }: ButtonPropsType) => {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0ACF00"
  },
  btnText: {
    fontSize: 24,
    fontWeight: "600",
  }
});