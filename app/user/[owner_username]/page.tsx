import ProfileHeader from "@/app/ui/profileHeader";
import { PostCard } from '@/app/ui/post-card';
import { postCard, User } from '@/app/lib/definitions';


export default async function Home({ params }: { params: Promise<{ owner_username: string }> }) {
  const data = await params;
  const username = data.owner_username;

  // Giriş yapmış kullanıcının bilgileri
  const user: User = {
    displayName: "Kaan Yazici",
    username: username,
    postNumber: 12,
    following: 120,
    followers: 500,
    profilePic: "/customers/evil-rabbit.png",
    banner: "banner.jpg",
  };

// Örnek gönderi verisi
  const exPost: postCard = {
    owner_username: 'kaanyazici',
    owner_name: 'Kaan Yazici',
    owner_image_url: '/customers/evil-rabbit.png',
    content_image_url: '/graph.png',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget enim mi...',
    date: '03/03/2025',
    likes: 10,
    comments: 1,
  };

  // const res = await fetch(
  //   '/endpoint', {
  //     method: 'GET'
  //   },
  // )
  // // FIXME: fix endpoint names
  // const [res1, res2] = await Promise.all([
  //   fetch("/endpoint1"),
  //   fetch("/endpoint2")
  // ]);

  return (
    <div className="bg-gray-100 min-w-screen min-h-screen p-4">
      <div className="mx-auto">
        {/* Kullanıcı profilini başlık bileşenine gönder */}
        <ProfileHeader user={user} />

        <div className="flex items-center flex-col gap-y-[64px] justify-center text-black mt-4">
          {/* Gönderi kartlarını render et */}
          <PostCard Post={exPost} />
          <PostCard Post={exPost} />
        </div>
      </div>
    </div>
  );
}
