
import { Comment } from "@/api/fetchComments";
import { useNavigation } from "expo-router";
import { use, useEffect } from "react";
import { Text, View } from "react-native";

interface PostProps {
  commentsPromise: Promise<Comment[]>;
}

export default function Post({
  commentsPromise
}: PostProps) {
  const comments = use(commentsPromise);
  const { setOptions } = useNavigation();

  useEffect(() => {
    setOptions({
      title: `Comments (${comments.length})`
    })
  }, [setOptions, comments]);

  return (
    <View>
      {comments.map((el) => <Text key={el.id}>{el.body}</Text>)}
    </View>
  );
}
