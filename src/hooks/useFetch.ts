import { useEffect, useState } from "react";

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status}`);
        return res.json() as Promise<T>;
      })
      .then(setData)
      .catch((err: unknown) => setError(err instanceof Error ? err.message : "Error desconocido"))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};
