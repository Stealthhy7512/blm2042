import { notFound } from "next/navigation";
import { PostCard } from "@/app/ui/post-card";
import { postCard } from "@/app/lib/definitions";

export default function PostDetailPage({ params }: { params: { id: string } }) {
    const post = {
        owner_username: "kaanyazici",
        owner_name: "Kaan Yazici",
        owner_image_url: "/customers/evil-rabbit.png",
        content_image_url: "/graph.png",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget enim mi.",
        date: "03/03/2025",
        likes: 10,
        comments: 1,
      } as postCard;
    //  = posts.find((p) => p.owner_username === params.id); // get post

    if (!post) return notFound();

    return (
    <main className="max-w-3xl mx-auto py-10 px-4">
        <PostCard Post={post} />
    </main>
    );
}
