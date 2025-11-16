
import { fetchComments } from "@/api/fetchComments";
import Post from "@/components/PostScreen";
import { useLocalSearchParams } from "expo-router";
import { Suspense } from "react";
import { Text } from "react-native";

export default function PostId() {
  const { postId } = useLocalSearchParams();
  const commentsPromise = fetchComments(postId as string);

  return (
    <Suspense fallback={<Text>Loading..</Text>}>
      <Post commentsPromise={commentsPromise}/>
    </Suspense>
  );
}
