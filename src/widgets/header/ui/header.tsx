import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full bg-[var(--background)]">
      <div className="p-3 flex items-center justify-between">
        <p className="text-2xl ">Профиль</p>
        <Menu size={32} strokeWidth={3} className="cursor-pointer" />
      </div>
    </header>
  );
};
