import { Link } from "react-router-dom";
export default function Dashboard(data) {
  const propArr = data.props;
  const rows = propArr.map((row) => (
  
    <tr key={row.name}>
       <Link to={`/individualstock/${row.name}`}> {row.name} </Link>
      <td>{row.symbol}</td>
      <td>{row.lastPrice}</td>
      <td>{row.change}</td>
    </tr>
  
  ));
  console.log(rows);
  return (
    <div>
      <h1>All stocks</h1>
      <table>
        <tr>
            <th>Company Name</th>
            <th>Price</th>
            <th>change</th>
        </tr>
        {rows}
      </table>
    </div>
  );
}
