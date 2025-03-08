import * as React from "react"

interface ProfileHeaderVariables {
    user: {
        displayName: string;
        username: string;
        postNumber: number;
        following: number
        followers:number
        profilePic: string;
        banner: string
    }
}

function ProfileHeader({ user }: ProfileHeaderVariables) {
    return (
        <div className="bg-gray-100 shadow-md rounded-t-4xl overflow-hidden mx-auto max-w-6/7">

            <div
            className="h-60 bg-gray-300"
            style={{
                backgroundImage: `url(${user.banner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            />
    
            <div className="p-4">
                <div className="flex items-center">
                    <img
                    src={user.profilePic}
                    alt="ProfilePicture"
                    className="w-40 h-40 rounded-full border-2 border-white -mt-12"
                    />
                    <div className="ml-4">
                    <h2 className="text-xl font-bold">{user.displayName}</h2>
                    <p className="text-gray-600">@{user.username}</p>
                    </div>
                </div>
        
                <div className="mt-2 flex space-x-4 text-center">
                    <div>
                    <p className="text-lg font-bold">{user.postNumber}</p>
                    <p className="text-gray-800 text-sm">Posts</p>
                    </div>
                    <div>
                    <p className="text-lg font-bold">{user.followers}</p>
                    <p className="text-gray-800 text-sm">Followers</p>
                    </div>
                    <div>
                    <p className="text-lg font-bold">{user.following}</p>
                    <p className="text-gray-800 text-sm">Following</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileHeader;
