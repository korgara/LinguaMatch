import { useAuthState } from "@/utils/useAuthState";
import { Stack } from "expo-router";

export default function RootLayout() {
  const { isLoggedIn } = useAuthState();

  return <Stack screenOptions={{

  }}>
    <Stack.Protected guard={isLoggedIn}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack.Protected>
    <Stack.Protected guard={!isLoggedIn}>
      <Stack.Screen options={{
        contentStyle: {
          padding: 20
        }
      }} name="sign-in" />
    </Stack.Protected>
  </Stack>
}
