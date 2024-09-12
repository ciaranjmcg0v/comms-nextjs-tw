import LeftPanel from "@/components/home/LeftPanel/LeftPanel";
import RightPanel from "@/components/home/RightPanel/RightPanel";

function page() {
  return (
    <main className="m-5">
      <div className="flex overflow-y-hidden h-[calc(100vh-50px)] max-w-[1700px] mx-auto bg-left-panel">
        {/* Green background decorator for Light Mode */}
        <div className="fixed top-0 left-0 w-full h-36 bg-green-primary dark:bg-transparent -z-30" />
        <LeftPanel />
        <RightPanel />
      </div>
    </main>
  );
}
export default page;
