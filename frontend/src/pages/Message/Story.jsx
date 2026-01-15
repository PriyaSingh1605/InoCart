export default function Story() {
    const stories = [
        { name: "You", avatar: "https://i.pravatar.cc/150?u=0" },
        { name: "alex_adv...", avatar: "https://i.pravatar.cc/150?u=1" },
        { name: "sarah_s...", avatar: "https://i.pravatar.cc/150?u=2" },
        { name: "david_e...", avatar: "https://i.pravatar.cc/150?u=3" },
        { name: "travel_...", avatar: "https://i.pravatar.cc/150?u=4" },
        { name: "tech_g...", avatar: "https://i.pravatar.cc/150?u=5" },
        { name: "design_...", avatar: "https://i.pravatar.cc/150?u=6" },
        { name: "foodie...", avatar: "https://i.pravatar.cc/150?u=7" },
        { name: "fit_life", avatar: "https://i.pravatar.cc/150?u=8" },
        { name: "art_lov...", avatar: "https://i.pravatar.cc/150?u=9" },
    ];

    return (
        <div className="flex bg-white border-b border-gray-200 py-4 items-center px-4 gap-4 overflow-x-auto scrollbar-hide md:ml-[60px]">
            {stories.map((story, index) => (
                <div key={index} className="flex flex-col items-center gap-1 cursor-pointer flex-shrink-0">
                    <div className={`h-[66px] w-[66px] p-[2px] rounded-full ${index === 0 ? "bg-none" : "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600"}`}>
                        <div className="h-full w-full bg-white p-[2px] rounded-full">
                            <img src={story.avatar} alt={story.name} className="h-full w-full rounded-full object-cover" />
                        </div>
                    </div>
                    <span className="text-xs text-black w-[70px] text-center truncate">{story.name}</span>
                </div>
            ))}
        </div>
    );
}