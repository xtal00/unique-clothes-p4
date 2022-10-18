import './CategoryList.css';
function CategoryList(props) {
    return (
      <div>
        <ul className="CategoryList">
          {props.categories.map((cat,key) => (
            <li>{cat}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default CategoryList;