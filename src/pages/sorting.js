import axios from "axios";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const resp = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${context.query.page}`
  );
  //   console.log(resp);
  const data = resp.data;
  return { props: { postDetail: data } };
}

export default function PostDetail({ postDetail }) {
  const router = useRouter();
  const page = Number(router.query.page || 1);
  return (
    <div>
      <ul className="list-disc list-inside">
        {postDetail.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
      <div>{postDetail.title}</div>
      <button
        className="p-2 text-white bg-blue-500 rounded"
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
}
