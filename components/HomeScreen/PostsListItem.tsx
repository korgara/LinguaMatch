import type { Post } from "@/api/fetchPosts";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

interface PostsListItemProps {
  item: Post
}

export default function PostsListItem({
  item
}: PostsListItemProps) {
  const { body, title, id } = item;
  return (
    <Link href={{
      pathname: '/[postId]',
      params: { postId: id, title: 'SUKA' }
    }}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{body}</Text>
      </View>
    </Link>
  )
}

const styles = StyleSheet.create({
  textContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: "white",
    borderRadius: 6,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    marginBottom: 10,
    fontWeight: 600,
    textTransform: 'capitalize'
  }
});
