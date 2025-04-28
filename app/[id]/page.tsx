import ProfileHeader from "@/components/ui/profileHeader";
import { PostCard } from '@/app/ui/post-card'
import { postCard } from '@/app/lib/definitions'

interface User {
  displayName: string;
  username: string;
  postNumber: number;
  following: number
  followers:number
  profilePic: string;
  banner: string
}
// FIXME: takes id as parameter then fetches user info with that id
// props: { params: { id: string } }
export default async function Home() {
  return (
    <div className="bg-gray-100 min-w-screen min-h-screen p-4">
      <div className="mx-auto">

        <ProfileHeader user={user} />
      
        <div className="flex items-center flex-col gap-y-[64px] justify-center text-black mt-4">
              <PostCard Post={exPost}/>
              <PostCard Post={exPost}/>
        </div>
      </div>
    </div>
  );
}

const exPost: postCard = {
  id: '1',
  post_owner: 'Kaan Yazici',
  owner_url: '/customers/evil-rabbit.png',
  image_url: '/graph.png',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
    Proin eget enim mi. Duis varius leo augue, et maximus nisl venenatis vitae. \
    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\
    Vestibulum ut urna nec nibh tempus varius. Sed auctor varius eros, sed facilisis ipsum interdum porta.\
    hellllllllllllllllllllllllllllllllllllllloooooooooooooooooooooooooooooo',
  date: '03/03/2025',
  likes: 10,
  comments: 1
};

const user: User = {
  displayName: "Ahmet",
  username: "ahmet012",
  postNumber: 12,
  following: 120,
  followers: 500,
  profilePic: "profile.jpg",
  banner: "banner.jpg",
};
