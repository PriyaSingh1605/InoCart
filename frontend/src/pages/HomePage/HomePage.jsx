import Navbar from "../../components/Navbar";
import Search from "./Search";
import Posts from "./Posts";
export default function HomePage() {
  return (
    <>
      {/* <div className="sticky top-0 flex justify-center bg-black z-[100] w-full p-2">
        <h1 className="text-2xl font-bold text-white ">InoCart</h1>
      </div> */}
      <Navbar />
      <Search />
      <Posts />
    </>
  );
}
