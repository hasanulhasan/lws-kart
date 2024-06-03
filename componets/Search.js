"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  
  const doSearch = () => {
    const params = new URLSearchParams(searchParams);    
    params.set('search', searchTerm);

    if(pathName.includes("shop")){
        replace(`${pathName}?${params.toString()}`);
    }else{
        replace(`/shop?${params.toString()}`);
    }

  }
  
  return (
    <div className="w-full max-w-xl relative flex">
      <span className="absolute left-4 top-3 text-lg text-gray-400">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <input
        onKeyDown={(e) => {
            if (e.key === "Enter") {
             doSearch();
            }
        }}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        name="search"
        id="search"
        className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
        placeholder="Search"
      />
      <button
        onClick={() => doSearch()}
        className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition"
      >
        Search
      </button>
    </div>
  );
}
