"use client";

import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";

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
      className="flex items-center justify-between gap-4 bg-slate-100 p-2 px-4 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search store..."
        className="bg-transparent w-full outline-none"
      />
      <button className="cursor-pointer">
        <FiSearch className="w-4 h-4 text-slate-400" />
      </button>
    </form>
  );
};

export default SearchBar;
