export type Post = {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export const fetchPosts = async(): Promise<Post[]> => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json());
}
