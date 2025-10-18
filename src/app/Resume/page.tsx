import LiveCodeWallpaper from "@/components/LiveCodeWallpaper";
import ResumeInteractive from "@/components/ResumeInteractive"; // or "@/components/Resume"

export const metadata = {
  title: "Priyanka Pillai | Resume",
  description: "Resume page of Priyanka Pillai",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen py-10 bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <LiveCodeWallpaper/>
      <div className="mx-auto max-w-5xl px-4">
        <ResumeInteractive />
      </div>
    </main>
  );
}
