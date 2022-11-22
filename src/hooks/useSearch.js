function useSearch(items, query) {
  const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });
  console.log("hello");
  return { filteredItems };
}
export default useSearch;
