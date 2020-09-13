import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({items, getCategoryIndex, activeCategory}){
  return (
    <div className="categories">
      <ul>
        <li onClick={() => getCategoryIndex(null)} className={activeCategory === null ? "active" : ''}>Все</li>
        {(items && items.length !== 0) ? items.map((item, index) => {
          return <li 
            className={activeCategory === index ? 'active' : ''} 
            data-li="categories" 
            onClick={() => getCategoryIndex(index)} 
            key={`${item}_${index}`}>{item}</li>
        }) : 'none categories'}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCategoryIndex: PropTypes.func.isRequired
}

Categories.defaultProps = {
  activeCategory: null
}

export default Categories;