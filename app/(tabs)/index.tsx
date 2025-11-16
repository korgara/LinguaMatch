import { fetchPosts } from "@/api/fetchPosts";
import HomeScreen from "@/components/HomeScreen";
import { Suspense } from "react";
import { Text } from "react-native";

export default function Home() {
  const posts = fetchPosts();

  return (
    <Suspense fallback={<Text>Loading..</Text>}>
      <HomeScreen postsPromise={posts}/>
    </Suspense>
  );
}
