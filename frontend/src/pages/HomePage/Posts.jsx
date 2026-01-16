
import Post from "../BasicComponents/Post";
export default function Posts() {
    const posts = [
        { id: 1, user: "alex_adventures", image: "https://picsum.photos/seed/1/600/600", avatar: "https://i.pravatar.cc/150?u=1", likes: 1240 },
        { id: 2, user: "sarah_style", image: "https://picsum.photos/seed/2/600/800", avatar: "https://i.pravatar.cc/150?u=2", likes: 856 },
        { id: 3, user: "david_eats", image: "https://picsum.photos/seed/3/600/600", avatar: "https://i.pravatar.cc/150?u=3", likes: 2300 },
        { id: 4, user: "travel_bug", image: "https://picsum.photos/seed/4/600/750", avatar: "https://i.pravatar.cc/150?u=4", likes: 543 },
        { id: 5, user: "tech_guru", image: "https://picsum.photos/seed/5/600/600", avatar: "https://i.pravatar.cc/150?u=5", likes: 3200 },
    ];

    return (
        <div className="flex flex-col items-center gap-4 bg-gray-50 min-h-screen py-6 px-0 md:ml-[60px] pb-20 md:pb-6">
            {posts.map((post) => (
                <Post post={post} />
            ))}
        </div>
    );
}