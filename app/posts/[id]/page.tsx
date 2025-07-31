import { notFound } from "next/navigation";

interface PostDetail {
    id: string;
    title: string;
    body_html: string;
    readable_publish_date?: string;
    user: {
      name: string;
      username: string;
      profile_image: string;
    };
  }


  
async function getPost(id: string): Promise<PostDetail | null> {
    const res = await fetch(`https://codelove.tw/api/post/${id}`, {
      next: { revalidate: 60 }, // 避免 SSR caching 問題（可選）
    });
    if (!res.ok) return null;
    return res.json();
  }
  
  export default async function PostPage({ params }: { params: { id: string } }) {
    const post = await getPost(params.id);
    if (!post) return notFound();
  
    return (
      <div className="prose max-w-3xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 text-sm mb-2">
          發布日期：{post.readable_publish_date}
        </p>
        <div className="flex items-center mb-6">
          <img
            src={post.user.profile_image}
            alt={post.user.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="text-sm text-gray-700">{post.user.name}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
      </div>
    );
  }