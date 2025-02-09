"use client"; //client-side rendering
import { useQuery } from "@tanstack/react-query"; //import hook from tanstack, it fetches data asynchronously, handles loading and error states automatically

//typescript interface that defines the shape of a post, each post must have an id thats a number, a title thats a string and a body thats a string
// defines an interface called Post, Post is an object, this is fetching posts from an API, we create an interface to describe the posts structure.
interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Posts() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery<Post[]>({
    //usequery to fetch and cache posts. post[] tells typscript the data will be an array of Post objects.
    queryKey: ["posts"], //unique identifier for this query
    queryFn: () =>
      //query function
      fetch("https://jsonplaceholder.typicode.com/posts").then(
        (
          res //fetches posts from this fake API for testing, converts response to JSON
        ) => res.json()
      ),
  });

  //error handeling
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  //rendering the post
  return (
    <div className="grid gap-4">
      {posts?.slice(0, 5).map(
        (
          post //takes only the first 5 posts and maps through them and creates a card for each
        ) => (
          <div key={post.id} className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

//overview: fetches posts using query
//displays loading meassage while waiting and handles errors if the request fails
//renders a list of 5 posts inside styled cards
