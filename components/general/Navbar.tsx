import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center py-4'>
        <div className='flex items-center gap-6'>
        <Link href="/"><h1 className="text-2xl font-bold">愛寫扣論壇 <span className="text-blue-500">JS Lover</span>的文章</h1></Link>
        </div>

        <div className="hidden sm:flex items-center gap-6">
            <Link href="/">首頁</Link>
            <Link href="/posts">文章</Link>
        </div>

        <div className="flex items-center gap-8">
        <Button variant="default">登入</Button>
        <Button variant="secondary">註冊</Button>
        </div>
    </nav>
  )
}