import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // List of items
  const items = ['apple', 'banana', 'guava', 'pineapple', 'grapes'];

  // States for search data and filtered items
  const [data, setData] = useState(""); 
  const [filteredItems, setFilteredItems] = useState(items); 

  // Handle input change and update the data state
  const handleChange = (e) => {
    setData(e.target.value);
  };

  // Filter items based on the data (search query)
  useEffect(() => {
    const filtered = items.filter((item) => {
      return item.toLowerCase().includes(data.toLowerCase());
    });
    setFilteredItems(filtered);
  }, [data]); // Only rerun the effect when 'data' changes

  return (
    <>
      <input 
        type="text" 
        value={data} 
        onChange={handleChange} 
        placeholder="Search fruits..." 
      />
      {filteredItems.length > 0 ? (
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li> // Ensure a unique key is provided
          ))}
        </ul>
      ) : (
        <div>No result found</div> // Show if no items match the query
      )}
    </>
  );
}

export default App;
