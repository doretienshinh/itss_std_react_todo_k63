function Filter({ filterItems, filter, setFilter }) {
  const handleClick = (e, filter) => {
    e.preventDefault();
    setFilter(filter);
  };

  return (
    <div className="panel-tabs">
      {filterItems.map((tabItem, index) => (
        <a
          key={index}
          href="/"
          className={`${filter === tabItem ? 'is-active' : ''}`}
          onClick={(e) => handleClick(e, tabItem)}
        >
          {tabItem}
        </a>
      ))}
    </div>
  );
}
export default Filter