import Link from "next/link";
import NavMenu from "./nav-menu";
import SearchBar from "./searchbar";
import NavIcons from "./nav-icons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 fixed z-50 w-full backdrop-blur-xl">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between lg:hidden">
        <Link href="/">
          <div className="text-xl tracking-wide font-bold">NatureAllByKay</div>
        </Link>
        <NavMenu />
      </div>
      {/* big screen */}
      <div className="hidden lg:flex items-center justify-between gap-8 h-full">
        {/* left */}
        <div className="w-1/3 lg:w-1/2 flex items-center gap-12">
          <Link href="/">
            <div className="text-xl tracking-wide font-bold">NatureAllByK</div>
          </Link>
          <div className="hidden lg:flex items-center justify-between gap-8">
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* right */}
        <div className="w-2/3 lg:w-1/2 flex items-center justify-end gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
