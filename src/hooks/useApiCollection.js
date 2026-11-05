"use client";

import { useEffect, useState } from "react";

export function useApiCollection(loader, initialData = []) {
  const [data, setData] = useState(initialData);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let mounted = true;

    const execute = async () => {
      setStatus("loading");
      setError(null);

      try {
        const result = await loader();

        if (mounted) {
          setData(result);
          setStatus("success");
        }
      } catch (requestError) {
        if (mounted) {
          setError(requestError);
          setStatus("error");
        }
      }
    };

    execute();

    return () => {
      mounted = false;
    };
  }, [loader, attempt]);

  return {
    data,
    status,
    error,
    retry: () => setAttempt((currentAttempt) => currentAttempt + 1),
  };
}
