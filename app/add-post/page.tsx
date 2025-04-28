import PostForm from "@/app/ui/add-post";

export default function AddPostPage() {
  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white shadow-xl rounded-xl px-6 py-8">
      <h1 className="text-3xl font-extrabold text-blue-600 mb-6">
        Yeni Gönderi Oluştur
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Paylaşmak istediğiniz içeriği buradan ekleyebilirsiniz.
      </p>
      <PostForm />
    </div>
  );
}
