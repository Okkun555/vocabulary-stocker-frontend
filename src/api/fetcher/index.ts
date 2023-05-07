export const fetcher = <T>(
  resource: RequestInfo,
  init?: RequestInit
): Promise<T> => {
  const res = fetch(resource, init)
    .then((res) => res.json())
    .catch((e) => {
      const error = new Error(e ?? "APIリクエストでエラーが発生しました");
      throw error;
    });

  return res;
};
