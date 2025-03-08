import Image from "next/image";
import { PostCard } from '@/app/ui/post-card'
import { postCard } from '@/app/lib/definitions'

const exPost: postCard = {
  id: '1',
  post_owner: 'Kaan Yazici',
  owner_url: '/customers/evil-rabbit.png',
  image_url: '/graph.png',
  message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
    'Proin eget enim mi. Duis varius leo augue, et maximus nisl venenatis vitae. ' +
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ' +
    'Vestibulum ut urna nec nibh tempus varius. Sed auctor varius eros, sed facilisis ipsum interdum porta.',
  date: '03/03/2025',
  likes: 10,
  comments: 1};

export default function Home() {
  return (
    // <NavBar />
    <div className="flex items-center flex-col gap-y-[64px] justify-center bg-blue-400 w-full text-black">
      <PostCard Post={exPost}/>
      <PostCard Post={exPost}/>
    </div>
  );
}
