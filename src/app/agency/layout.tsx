import Page1 from "./page";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen   md:flex-row  md:overflow-hidden  scroll-smooth bg-gradient-to-bl from-[#020308] from-20% via-[#00010a] via-112% to-[#2e0202] to-120%
        screen h-full... text-white font-display">
      <div className="w-full flex-none md:w-2">
        
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:px-2">{children}</div>
    </div>
  );
}