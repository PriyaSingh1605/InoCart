import { Search as SearchIcon } from "lucide-react";

export default function Search() {
    return (
        <div className="sticky top-0 z-[100] flex justify-between items-center p-4 pl-10 bg-white border-b border-gray-200 md:ml-[60px] gap-4">
            <h1 className="text-2xl font-bold text-black font-serif tracking-wide shrink-0">InoCart</h1>

            {/* Desktop Search */}
            <div className="hidden md:flex items-center relative md:w-[500px] ml-8">
                <SearchIcon className="absolute left-3 h-4 w-4 text-gray-500 pointer-events-none" />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full border border-gray-300 bg-gray-50 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black transition-all placeholder:text-gray-400"
                />
                {/* Profile Icon for Desktop */}
                <div className="hidden md:flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300 overflow-hidden ring-1 ring-gray-300 ml-4">
                    <img src="https://i.pravatar.cc/150?u=0" alt="Profile" className="h-full w-full object-cover" />
                </div>
            </div>

        

            {/* Mobile Search Icon */}
            <div className="md:hidden flex items-center gap-4">
                <SearchIcon className="h-6 w-6 text-black cursor-pointer" />
                {/* Profile Icon for Desktop */}
                <div className="md:hidden flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300 overflow-hidden ring-1 ring-gray-300 ml-4">
                    <img src="https://i.pravatar.cc/150?u=0" alt="Profile" className="h-full w-full object-cover" />
                </div>
            </div>
        </div>
    );
}