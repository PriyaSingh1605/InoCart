import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
export default function Post({post}) {
    return(
        <div key={post.id} className="flex flex-col bg-white w-full sm:w-[85%] md:w-[650px] border-b sm:border border-gray-200 sm:rounded-lg shadow-sm">
            {/* Header */}
            <div className="flex flex-row items-center justify-between p-3">
                <div className="flex flex-row items-center gap-3">
                    <div className="h-9 w-9 bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px] rounded-full">
                        <div className="h-full w-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                            <img src={post.avatar} alt="avatar" className="h-full w-full object-cover" />
                        </div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 cursor-pointer hover:underline">{post.user}</span>
                </div>
                <MoreHorizontal className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-800" />
            </div>

            {/* Image */}
            <div className="w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img src={post.image} alt="post" className="w-full h-auto object-cover max-h-[700px]" />
            </div>

            {/* Actions */}
            <div className="flex flex-col p-3 gap-2">
                <div className="flex flex-row justify-between w-full mb-1">
                    <div className="flex flex-row gap-4">
                        <Heart className="h-6 w-6 text-black cursor-pointer hover:text-gray-500 transition-colors" />
                        <MessageCircle className="h-6 w-6 text-black cursor-pointer hover:text-gray-500 transition-colors" />
                        <Send className="h-6 w-6 text-black cursor-pointer hover:text-gray-500 transition-colors" />
                    </div>
                    <Bookmark className="h-6 w-6 text-black cursor-pointer hover:text-gray-500 transition-colors" />
                </div>

                {/* Likes */}
                <p className="text-sm font-semibold text-gray-900 cursor-pointer">{post.likes.toLocaleString()} likes</p>

                {/* Caption */}
                <div className="text-sm text-gray-900">
                    <span className="font-bold mr-2 cursor-pointer hover:underline">{post.user}</span>
                    <span className="text-gray-800">Enjoying the moment! ✨ #vibes #life</span>
                </div>

                {/* Comments link */}
                <p className="text-sm text-gray-500 cursor-pointer pt-1">View all comments</p>

                <p className="text-[10px] text-gray-400 uppercase tracking-wide">3 hours ago</p>
            </div>
        </div>
    )
}


