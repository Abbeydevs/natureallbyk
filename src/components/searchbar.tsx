"use client";

import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { Button } from "./ui/button";

const SearchBar = () => {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      router.push(`/search?name=${name}`);
    }
  };

  return (
    <form
      className="flex items-center justify-between gap-4 bg-transparent p-2 px-4 rounded-md w-1/2 ring-1 ring-slate-300"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search store..."
        className="bg-transparent w-full outline-none text-black"
      />
      <Button
        variant="ghost"
        className="cursor-pointer hover:bg-transparent p-0 h-0"
      >
        <FiSearch className="w-4 h-4 text-slate-400" />
      </Button>
    </form>
  );
};

export default SearchBar;
