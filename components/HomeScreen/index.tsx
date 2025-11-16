import type { Post } from "@/api/fetchPosts";
import { use } from "react";
import { FlatList, View } from "react-native";
import PostsListItem from "./PostsListItem";

interface HomeScreenProps {
  postsPromise: Promise<Post[]>
}

export default function HomeScreen({
  postsPromise
}: HomeScreenProps) {
  const posts = use(postsPromise);

  return (
    <View style={{ backgroundColor: 'white' }}>
      <FlatList data={posts}
        renderItem={({ item }) => <PostsListItem item={item}/>}
        ItemSeparatorComponent={() => <View style={{ padding: 10 }}/>}
        contentContainerStyle={{
          paddingVertical: 20,
          paddingHorizontal: 10,
          backgroundColor: 'white'
        }}
        keyExtractor={item => item.id}/>
    </View>
  );
}
