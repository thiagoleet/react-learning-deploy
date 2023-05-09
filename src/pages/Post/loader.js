export function loader({ params }) {
  const postId = params.id;
  return fetch("https://jsonplaceholder.typicode.com/posts/" + postId);
}
