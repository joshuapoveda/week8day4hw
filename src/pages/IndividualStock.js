import { useParams } from "react-router-dom";
export default function IndividualStock(data) {
  let obj = data.props;

  const { id } = useParams();

  const stats = (id) => {
    // console.log(id)
    console.log(obj);
    for (const ele of obj) {
      if (Object.values(ele).includes(id) === true)
        return <ul>
            <li><strong>Symbol:</strong> {ele.symbol}</li>
            <li><strong>Last Price:</strong> {ele.lastPrice}</li>
            <li><strong>Open:</strong> {ele.open}</li>
            <li><strong>Change:</strong> {ele.change}</li>
            <li><strong>High:</strong> {ele.high}</li>
            <li><strong>Low:</strong> {ele.low}</li>
        </ul>;
    }
  };
  return (
    <div>
      <h1>{id}</h1>
      {stats(id)}
    </div>
  );
}
