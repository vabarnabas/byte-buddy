export default function Navbar() {
  return (
    <div className="fixed inset-x-0 top-0 h-14 flex items-center justify-center px-6 backdrop-blur z-30">
      <div className="flex items-center justify-between max-w-[1280px] h-full w-full">
        <p className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
          ByteBuddy
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white rounded-md px-5 py-2 text-sm font-semibold">
          Try it!
        </button>
      </div>
    </div>
  );
}
