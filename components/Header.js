import HeaderItem from "./HeaderItem";
import Link from "next/link";
import { HiHome, HiSearch, HiCollection} from "react-icons/hi";

const Header = () => {
  return (
    <header className="mx-auto p-8 max-w-[1920px] flex flex-col md:flex-row md:justify-between items-center">
      <div className="p-4 text-center">
        <h1 className="text-6xl font-Aboreto font-bold text-bravo-dark">
          Bravo
        </h1>
        <p className="p-2 text-sm font-Oswald font-light text-bravo-accent">
          Film Streaming Platform
        </p>
      </div>
      <div className="py-2 flex flex-gow justify-evenly">
        <Link href="/">
          <a>
            <HeaderItem title="HOME" Icon={HiHome} />
          </a>
        </Link>
        <Link href="/explore">
          <a>
            <HeaderItem title="EXPLORE" Icon={HiCollection} />
          </a>
        </Link>
        <Link href="/search">
          <a>
            <HeaderItem title="EXPLORE" Icon={HiSearch} />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
