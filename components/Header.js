import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

const Header = () => {
  return (
    <header className="mx-auto p-8 max-w-[1920px] flex flex-col md:flex-row md:justify-between items-center">
      <div className="p-4 text-center">
      <h1 className="text-6xl font-Aboreto font-bold text-bravo-dark">Bravo</h1>
      <p className="p-2 text-sm font-Oswald font-light text-bravo-accent">Film Streaming Platform</p>
      </div>
      <div className="py-2 flex flex-gow justify-evenly">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
    </header>
  );
};

export default Header;
