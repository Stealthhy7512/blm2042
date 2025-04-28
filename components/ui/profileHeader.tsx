import BlockButton from "@/app/ui/block-button";
import FollowButton from "@/app/ui/follow-button";
import Link from "next/link";

interface ProfileHeaderVariables {
  user: {
    displayName: string;
    username: string;
    postNumber: number;
    following: number;
    followers: number;
    profilePic: string;
    banner: string;
    isCurrentUser?: boolean; // Kullanıcı kendi profilindeyse true
  };
}

function ProfileHeader({ user }: ProfileHeaderVariables) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mx-auto max-w-3xl">
      {/* Banner */}
      <div
        className="h-48 bg-gray-300 relative rounded-t-lg"
        style={{
          backgroundImage: `url(${user.banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Profil fotoğrafı */}
        <div className="absolute bottom-[-40px] left-4">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white object-cover shadow-md"
          />
        </div>
      </div>

      {/* Bilgiler */}
      <div className="pt-20 px-4 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{user.displayName}</h2>
            <p className="text-sm text-gray-600">@{user.username}</p>
          </div>

          {/* Butonlar */}
          <div className="flex gap-2">
            {user.isCurrentUser ? (
              <>
                <Link href="/settings">
                  <button className="px-4 py-2 border rounded-md text-sm text-gray-700 hover:bg-gray-200 transition">
                    Ayarlar
                  </button>
                </Link>
                <Link href="/create-post">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition">
                    Yeni Gönderi
                  </button>
                </Link>
              </>
            ) : (
              <>
                <FollowButton />
                <BlockButton />
              </>
            )}
          </div>
        </div>

        {/* Sayaçlar */}
        <div className="mt-6 flex justify-around text-center">
          <div>
            <p className="text-lg font-bold">{user.postNumber}</p>
            <p className="text-sm text-gray-600">Posts</p>
          </div>
          <div>
            <p className="text-lg font-bold">{user.followers}</p>
            <p className="text-sm text-gray-600">Followers</p>
          </div>
          <div>
            <p className="text-lg font-bold">{user.following}</p>
            <p className="text-sm text-gray-600">Following</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
