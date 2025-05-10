"use client"

import { PostCard } from "@/app/ui/post-card";
import { postCard } from "@/app/lib/definitions";

// const posts: postCard[] = [
//   {
//     postId: 1,
//     owner_username: "kaanyazici",
//     owner_name: "Kaan Yazici",
//     owner_image_url: "/customers/evil-rabbit.png",
//     content_image_url: "/graph.png",
//     message:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget enim mi. Duis varius leo augue, et maximus nisl venenatis vitae.",
//     date: "03/03/2025",
//     likes: 10,
//     comments: 1,
//     isLiked: true,
//     isFollowed: true,
//   },
//   {
//     postId: 2,
//     owner_username: "ali_veli",
//     owner_name: "Ali Veli",
//     owner_image_url: "/customers/ali-avatar.png",
//     content_image_url: "/nature.jpg",
//     message:
//       "Sed auctor varius eros, sed facilisis ipsum interdum porta. Aliquam erat volutpat. Phasellus et ligula eu nulla.",
//     date: "04/03/2025",
//     likes: 25,
//     comments: 5,
//     isLiked: false,
//     isFollowed: false,
//   },
//   {
//     postId: 3,
//     owner_username: "muratYilmaz",
//     owner_name: "Murat Yılmaz",
//     owner_image_url: "/customers/murat-avatar.png",
//     content_image_url: "/cityscape.jpg",
//     message:
//       "Vestibulum ut urna nec nibh tempus varius. Sed auctor varius eros, sed facilisis ipsum interdum porta. Curabitur accumsan metus.",
//     date: "05/03/2025",
//     likes: 30,
//     comments: 7,
//     isLiked: true,
//     isFollowed: false,
//   },
// ];

export default function Home() {

  return (
    <main className="min-h-screen w-full bg-gray-50 px-6 py-10 flex flex-col md:flex-row items-center justify-center gap-10 mx-auto">
      <section className="space-y-6">
        {/*{posts.map((post: postCard, index: number) => (*/}
        {/*  <PostCard key={index} Post={post} />*/}
        {/*))}*/}
      </section>
    </main>
  );
}
