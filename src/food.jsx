
function Food(){
  const f1="Apple";
  const f2="Banana";
  const f3="Mango";

return(
  <div>
    <ul>
      <li>{f1}</li>
      <li>{f2}</li>
      <li>{f3.toUpperCase()}</li>
    </ul>
  </div>
);
}
export default Food;