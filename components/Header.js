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
    <header className="mx-auto max-w-[1240px] flex flex-col md:flex-row md:justify-between items-center">
      <h1 className="m-8 self-center text-6xl font-bold text-bravo-dark font-Aboreto">Bravo</h1>
      <div className="m-2 flex flex-gow justify-evenly">
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
