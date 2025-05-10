import BlockButton from "@/app/ui/block-button";
import FollowButton from "@/app/ui/follow-button";
import { User } from "@/app/lib/definitions"

export default function ProfileHeader({ user }: { user: User }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mx-auto max-w-3xl">
      <div
        className="h-48 bg-gray-300 relative rounded-t-lg"
        style={{
          backgroundImage: `url(${user.bannerId})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-[-40px] left-4 transition-all duration-300 hover:scale-110">
          <img
            src={user.profilePicId}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-md"
          />
        </div>
      </div>

      <div className="pt-20 px-4 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{user.displayName}</h2>
            <p className="text-sm text-gray-600">@{user.username}</p>
          </div>

          <div className="flex gap-2">
            {!user.isCurrentUser && (
              <>
                <FollowButton username={user.username} isFollow={user.isFollowed} />
                <BlockButton username={user.username} isBlock={user.isBlocked} />
              </>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-around text-center">
          <div className="transition-all duration-75 hover:scale-125">
            <p className="text-lg font-bold ">{user.postNumber}</p>
            <p className="text-sm text-gray-600">Posts</p>
          </div>
          <div className="transition-all duration-75 hover:scale-110">
            <p className="text-lg font-bold">{user.followers}</p>
            <p className="text-sm text-gray-600">Followers</p>
          </div>
          <div className="transition-all duration-75 hover:scale-110">
            <p className="text-lg font-bold">{user.following}</p>
            <p className="text-sm text-gray-600">Following</p>
          </div>
        </div>
      </div>
    </div>
  );
}