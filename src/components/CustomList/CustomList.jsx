import './CustomList.css';

export default function CustomList(props) {
  return (
    <div className="CustomList">
      <div>Category: {props.cloth.category}</div>
      <div>farbic: {props.cloth.farbic}</div>
      <div>Price: {props.cloth.price}</div>
      <div>Date: {props.cloth.date}</div>
      <div>Size: {props.cloth.size}</div>
      </div>
  );
}