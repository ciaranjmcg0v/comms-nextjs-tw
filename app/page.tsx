import { ClipboardCheck, MessageCircle } from "lucide-react";
import Link from "next/link";

function page() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-evenly">
        <Link
          href="/chat"
          className="flex items-center bg-green-600 text-white rounded-full px-4 py-2 shadow-md hover:scale-105 transition-all duration-150 cursor-pointer"
        >
          <MessageCircle className="text-white w-4 h-4 mr-1" /> Chat
        </Link>

        <Link
          href="/tasks"
          className="flex items-center bg-indigo-600 text-white rounded-full px-4 py-2 shadow-md hover:scale-105 transition-all duration-150 cursor-pointer"
        >
          <ClipboardCheck className="text-white w-4 h-4 mr-1" /> Tasks
        </Link>
      </div>

      <p className="mt-6 text-sm font-semibold text-black">
        You must be logged in to continue.
      </p>
    </div>
  );
}
export default page;
