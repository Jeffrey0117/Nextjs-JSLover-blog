# 📝 JS Lover 部落格轉製練習（Next.js + API）

這是一個以 [https://codelove.tw/](https://codelove.tw/) 為資料來源的小練習專案，  
目的是把該站使用者 **JS Lover** 的發文內容，透過 API 抓取後，  
用 **Next.js** 製作成一個可分頁、可切換排序的簡易部落格頁面。

---

## 🔧 技術重點

- 使用 **Next.js App Router**
- Client Component 實作前端分頁
- `useEffect` 搭配 `fetch` 取得公開 API 資料
- 可切換「從新到舊 / 從舊到新」排序
- 使用 Tailwind CSS 做基本排版與 RWD
- 資料來源：
https://codelove.tw/api/posts?username=JsLover0018&per_page=100&page=1


---

## 🚀 快速啟動

```bash
git clone https://github.com/Jeffrey0117/Nextjs-JSLover-blog.git
cd Nextjs-JSLover-blog
npm install
npm run dev
```
瀏覽器打開 http://localhost:3000 即可查看頁面。

---

## 📦 未來可擴充方向

* 加上搜尋功能或標籤分類
* 透過 Vercel 自動部署
* 支援 URL 上的 `?page=2&sort=oldest`

---

## 📚 備註

本專案純屬前端技術練習與觀摩用途，
資料來源來自 JS Lover 在 codelove 平台上公開發表之內容。
若有侵權或內容下架需求，請隨時聯絡專案維護者進行處理。

---