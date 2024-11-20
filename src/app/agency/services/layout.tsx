import Page1 from "../page";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen md:flex-row overflow-hidden  bg-gradient-to-bl from-[#10103a] via-[#010529] to-[#750909] text-white font-display">
      {/* Sidebar or additional section */}
      <div className="w-full mt-10 md:w-2 hidden md:flex flex-grow md:overflow-y-auto">
        {/* Content or navigation for the sidebar can go here */}
      </div>

      {/* Main content area */}
      <div className="flex-grow h-screen overflow-y-auto  md:px-2">
        {children}
      </div>
    </div>
  );
}
