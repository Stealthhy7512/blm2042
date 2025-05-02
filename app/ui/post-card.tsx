'use client';

import { postCard } from '@/app/lib/definitions';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChatBubbleLeftRightIcon, CalendarIcon, HeartIcon } from "@heroicons/react/24/solid";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { inter } from '@/app/ui/fonts'
import LikeButton from '@/app/ui/like-button'
import CommentButton from "@/app/ui/comment-button";
import FollowButton from "@/app/ui/follow-button";
import ShareButon from '@/app/ui/share-button';
import Link from "next/link";


export function PostCard({ Post }: { Post: postCard } ) {

  return (
    <Card className={`md:block w-auto shadow-2xl ${inter.className} transition-all duration-300 hover:shadow-xl`}>
      <CardHeader>
        <CardTitle className='flex items-center gap-1.5 text-lg'>
          <div className='flex items-center w-full justify-between gap-3 px-1.5'>
            <Link href={`/${Post.owner_username}`} className='flex flex-row items-center gap-1.5'>
              <Image
                src={Post.owner_image_url}
                className="mr-2 rounded-full"
                width={48}
                height={48}
                alt={'image'} />
              {Post.owner_name}
            </Link>
            <FollowButton />
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="grid gap-4">
        <div className="mb-4 grid grid-cols-[600px_1fr] items-start pb-4 last:mb-0 last:pb-0">
          <div className="space-y-2">
            <p className='text-lg flex border-t-2 mt-5 pt-2 whitespace-normal'>
              {Post.message}
            </p>

            <div className="text-sm flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer">
                    {Post.content_image_url && (
                      <Image
                        src={Post.content_image_url}
                        width={500}
                        height={500}
                        alt={'image'}
                        className="rounded-lg border-2 border-gray-200 hover:border-blue-500 transition-all"
                      />
                    )}
                  </div>
                </DialogTrigger>

                <DialogContent className={`w-full min-w-[80vw] min-h-[90vh] p-0 ${inter.className}`}>
                  <DialogTitle className="sr-only">Post</DialogTitle>
                  <div className="flex flex-col md:flex-row w-full h-[90vh] overflow-hidden">

                    {/* Left: Image */}
                    <div className="flex justify-center items-center md:w-auto">
                      {Post.content_image_url && (
                        <Image
                          src={Post.content_image_url}
                          alt="post image"
                          width={500}
                          height={500}
                          className="rounded-lg"
                        />
                      )}
                    </div>

                    {/* Right: Details */}
                    <div className="flex flex-col flex-1 min-w-[300px] h-full border-l overflow-hidden bg-white">
                      {/* Top: Poster and caption */}
                      <div className="p-4 pb-2 border-b">
                        <div className="flex items-center justify-between gap-3 mb-2 pr-10">
                          <Link href={`/${Post.owner_username}`} className='flex flex-row items-center gap-1.5 text-lg'>
                            <Image
                              src={Post.owner_image_url}
                              className="mr-2 rounded-full"
                              width={48}
                              height={48}
                              alt={'image'} />
                            {Post.owner_name}
                          </Link>
                          <FollowButton />
                        </div>
                        <p className="text-sm">{Post.message}</p>
                        <div className="flex justify-start text-sm text-muted-foreground gap-3 mt-2">
                          <CalendarIcon className='w-4' /> {Post.date}
                        </div>
                      </div>

                      {/* Comments */}
                      <div className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-2">
                        {Array.from({ length: 15 }, (_, i) => (
                          <p key={i} className="text-sm text-gray-700">
                            <strong>@user{i}</strong> This is comment #{i + 1}
                          </p>
                        ))}
                      </div>

                      {/* Comment input */}
                      <div className="border-t p-4 shrink-0 flex flex-row space-x-2">
                        <Textarea placeholder="Add a comment..." className="w-full mb-2" />
                        <Button type="submit" className="w-auto">Post Comment</Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex flex-row items-center justify-between mx-4">
              <div className="flex justify-start text-muted-foreground gap-3">
                <CalendarIcon className='w-5' /> {Post.date}
              </div>
              <div className="flex flex-row justify-end gap-2">
                <LikeButton likes={Post.likes} />
                <CommentButton comments={Post.comments} />
                <ShareButon />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
