import { useEffect, useState } from "react";
import { Metadata } from "../types/Metadata";
import Fuse from "fuse.js";
import { useRouter } from "next/router";

export const useSearch = (posts: Metadata[]) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    if (search) {
      const fuse = new Fuse(posts, {
        keys: ["title"],
      });

      const results = fuse.search(search).map((item) => item.item);

      setFilteredPosts(results);
    } else {
      setFilteredPosts(posts);
    }
  }, [search, router.locale]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return {
    handleSearch,
    filteredPosts,
  };
};
