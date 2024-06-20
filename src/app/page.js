import FeaturedPosts from "@/components/FeaturedPosts";
import { getAllPosts } from "@/lib/post";

export default async function Home() {
  let featuredPosts = (await getAllPosts()).slice(0,3);
  console.log(featuredPosts)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <FeaturedPosts posts={featuredPosts}/>
      </div>
    </main>
  );
}

