export type Comment = {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
}

export const fetchComments = async(id: string): Promise<Comment[]> => {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(response => response.json());
}
