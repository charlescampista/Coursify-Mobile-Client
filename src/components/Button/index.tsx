import { Text, TouchableOpacity } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

type Props = RectButtonProps & {
  title: string;
  handleClick: Function;
};

export function Button({ title, handleClick, ...rest }: Props) {
  return (
    <TouchableOpacity onPress={() => handleClick()}>
      <RectButton style={styles.container} {...rest}>
        <Text style={styles.title}>{title}</Text>
      </RectButton>
    </TouchableOpacity>
  );
}
