import { useState, useEffect } from "react";
export function SearchUsers() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const data = await response.json();
        setUsers(data);
      } catch (e) {
        console.log(e.message);
        setError("Error while loading !");
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  const filtered = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {filtered.length === 0 ? (
        <p>No Results, Try Again.</p>
      ) : (
        <ul>
          {filtered.map((user) => (
            <li key={user.id}>
              Name:{user.name} | E-mail:{user.email}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
