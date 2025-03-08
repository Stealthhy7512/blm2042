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
import { inter } from '@/app/ui/fonts'
import LikeButton from '@/app/ui/like-button'
import CommentButton from "@/app/ui/comment-button";
import FollowButton from "@/app/ui/follow-button";


export function PostCard({ Post }: { Post: postCard } ) {

  return (
    <Card className={`md:block w-auto shadow-2xl ${inter.className}`}>
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
            <FollowButton />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <div className="mb-4 grid grid-cols-[600px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <div className="space-y-2">
              <p className='text-lg flex border-t-2 mt-5 pt-2 whitespace-normal'>
                { Post.message }
              </p>
              <div className="text-sm flex justify-center">
                { Post.image_url && (
                  <Image
                    src={Post.image_url}
                    width={500}
                    height={500}
                    alt={'image'}
                  />
                )}
              </div>
              <div className="flex flex-row items-center justify-between mx-4">
                <div className="flex justify-begin text-muted-foreground gap-3">
                  {/*TODO Date calculate: today, yesterday, a week ago etc..*/}
                  <CalendarIcon className='w-5'/> {Post.date}
                </div>
                <div className="flex flex-row justify-end gap-2">
                  <LikeButton likes={Post.likes} />
                  <CommentButton comments={Post.comments} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}