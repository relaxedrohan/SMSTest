export default function Navbar() {
  return (
    <div className="navbar">
      <label>
        From : <input type="date" />
      </label>
      <label>
        To : <input type="date" />
      </label>
      <button>Filter by Date</button>
    </div>
  );
}
