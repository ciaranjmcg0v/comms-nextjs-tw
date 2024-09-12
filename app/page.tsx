import Link from "next/link";

function page() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Link href="/chat" className="bg-green-600 text-black rounded-md p-2">
        Go to Chat
      </Link>
      <p className="mt-6 text-sm text-muted text-black">
        You must be logged in to access the chat.
      </p>
    </div>
  );
}
export default page;
