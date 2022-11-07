import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
import StackRoutes from "./Components/Routes/rotas";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <StackRoutes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});