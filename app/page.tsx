'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  summary?: string;
  readable_publish_date?: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const pageSize = 6;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://codelove.tw/api/posts?username=JsLover0018&per_page=100&page=1');
      const data = await res.json();
      setPosts(data);
    }
    fetchData();
  }, []);

  const sortedPosts = sortOrder === 'newest'
  ? posts
  : [...posts].reverse();


  const totalPages = Math.ceil(sortedPosts.length / pageSize);
  const paginatedPosts = sortedPosts.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="py-12">
      <h1 className="text-4xl font-bold tracking-tight mb-6">看看他寫了什麼</h1>

      {/* 排序切換按鈕 */}
      <div className="mb-4 text-center">
        <button
          onClick={() => {
            setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest');
            setPage(1); // 切換排序時跳回第一頁
          }}
          className="px-4 py-2 border rounded"
        >
          切換排序：{sortOrder === 'newest' ? '從新到舊' : '從舊到新'}
        </button>
      </div>

      {/* 文章區塊 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 gap-x-8">
        {paginatedPosts.map((post) => (
          <div key={post.id} className="mt-12">
            <p className="text-gray-500 text-sm">{post.readable_publish_date}</p>
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-600 mb-2">{post.summary}</p>
          </div>
        ))}
      </div>

      {/* 分頁按鈕 */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          ← Prev
        </button>
        <span className="self-center">Page {page} / {totalPages}</span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
