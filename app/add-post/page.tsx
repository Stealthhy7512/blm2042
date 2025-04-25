import PostForm from "@/app/ui/add-post";

export default function AddPostPage() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Yeni Gönderi Oluştur</h1>
      <PostForm />
    </div>
  );
}
