import { useAuthState } from "@/utils/useAuthState";
import { Stack } from "expo-router";

export default function RootLayout() {
  const { isLoggedIn } = useAuthState();

  return <Stack>
    <Stack.Protected guard={isLoggedIn}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="[postId]" options={{
        title: "Comments",
        headerBackTitle: 'Home'
      }}/>
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
