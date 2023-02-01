import { useState } from "react";
import { useItems } from "../../../../store/Context";

export function useSearch() {
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const { setItems } = useItems();

  return {
    setQuery,
    loading,
    query,
  };
}
