import { postCard } from '@/app/lib/definitions'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChatBubbleLeftRightIcon, CalendarIcon, HeartIcon } from "@heroicons/react/24/solid";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";


export function PostCard({ Post }: { Post: postCard } ) {

  return (
    <Card className='md:block w-auto shadow-2xl'>
      <CardHeader>
        <CardTitle className='flex flex-row items-center gap-1.5 text-lg'>
          {/* TODO add profile link to header */}
          <div className='flex flex-row items-center gap-1.5'>
            <Image
              src={Post.owner_url}
              className="mr-2 rounded-full"
              width={48}
              height={48}
              alt={'image'} />
            {Post.post_owner}
            {/* TODO following button add functionality */}
            <span className='ml-80 flex flex-row text-muted-foreground gap-1.5 text-sm border-2 rounded-xl border-gray-600 p-1'>
              {/* TODO (following) ? (<CheckCircleIcon className='w-5'/> Following) : (<Button /> Follow) */}
              <CheckCircleIcon className='w-5'/> Following
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <div className="mb-4 grid grid-cols-[600px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground flex justify-center">
                { Post.image_url && (
                  <Image
                    src={Post.image_url}
                    width={500}
                    height={500}
                    alt={'image'}
                  />
                )}
              </p>
              <div className="flex flex-row items-center justify-between mx-4">
                <div className="flex justify-begin text-muted-foreground gap-3">
                  {/*TODO Date calculate: today, yesterday, a week ago etc..*/}
                  <CalendarIcon className='w-5'/> {Post.date}
                </div>
                <div className="flex flex-row justify-end gap-4">
                  <p className="text-base text-muted-foreground flex gap-1">
                    {/* TODO Button to like */}
                    <HeartIcon className="w-5"/> {Post.likes}
                  </p>
                  <p className="text-base text-muted-foreground flex gap-1">
                    <ChatBubbleLeftRightIcon className="w-5" /> {Post.comments}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}