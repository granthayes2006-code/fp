function SearchBar({ search, setSearch }) {
  return (
    <input
      className="form-control mb-3"
      placeholder="Search by first name"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default SearchBar
