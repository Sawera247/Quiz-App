import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchBar.css'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const cates = [
    { name: 'HTML', src: '/html.png', key: 'html' },
    { name: 'CSS', src: '/css.png', key: 'css' },
    { name: 'JavaScript', src: '/js.webp', key: 'javascript' },
    { name: 'React', src: '/react.png', key: 'react' },
    { name: 'C++', src: '/c++.png', key: 'cpp' },
    { name: 'Python', src: '/python.png', key: 'python' },
  ];

  const handleCategoryClick = (key) => {
    navigate(`/quiz/${key}`);
  };

  const filteredCates = cates.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="option">
      <div className="search">
        <div className="searchContainer">
          <input
            type="text"
            className="searchBar"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <i className="fa fa-search searchIcon"></i>
        </div>

        <p className="setting">
          <i className="fa-solid fa-sliders fa-rotate-90"></i>
        </p>
      </div>

      <div className="category">
        <p className="cate">Categories</p>

        <div className="cate-list">
          {filteredCates.length > 0 ? (
            filteredCates.map((item, index) => (
              <button
                key={index}
                className="cate-item"
                onClick={() => handleCategoryClick(item.key)}
              >
                <img src={item.src} alt={item.name} />
                <p>{item.name}</p>
              </button>
            ))
          ) : (
            <p className="no-results">No results found</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchBar
