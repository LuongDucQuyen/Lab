// import React, { useEffect, useState } from "react";
// import {
//   Wrapper,
//   ItemGroup,
//   Item,
//   ItemTop,
//   ItemBottom,
//   ItemTopLeft,
//   ItemtopleftName,
//   ItemtopleftId,
//   ItemtopRight,
//   ItemBottomLeft,
// } from "./style";
// import axios from "axios";
// import MarketTrendChart from "./Chart";
// import Arrow from "../../../assets/DasboardIcon/ArrowGreen.svg";

// const MarketTrend = () => {
//   const [Coins, setCoins] = useState([]);
//   const [lineChartData , setLineChartData] = useState([]);
//   useEffect(() => {
//     axios
//       .get(
//         `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`
//       )
//       .then((res) => {
//         setCoins(res.data.splice(0, 4));
//       });
//   }, []);
//   return (
//     <Wrapper>
//       <h3>Market Trend</h3>
//       <ItemGroup>
//         {Coins.map((coin: any) => {
//           return (
//             <Item>
//               <ItemTop>
//                 <ItemTopLeft>
//                   <img src={coin.image} alt="IconCoins" />
//                   <ItemtopleftId>
//                     <p>{coin.symbol.toUpperCase()}</p>
//                   </ItemtopleftId>
//                   <ItemtopleftName>
//                     <p>{coin.id.toUpperCase()}</p>
//                   </ItemtopleftName>
//                 </ItemTopLeft>
//                 <ItemtopRight>
//                     <img src={Arrow} alt=""/>
//                 </ItemtopRight>
//               </ItemTop>
//               <ItemBottom>
//                 <ItemBottomLeft>
//                     <h4>$ {coin.current_price}</h4>
//                     {/* @ts-ignore */}
//                     <p>{parseFloat((coin.price_change_24h / coin.current_price * 100)).toFixed(2)}%</p>
//                 </ItemBottomLeft>
//                 <MarketTrendChart dataLine = {coin.id} ></MarketTrendChart>
//               </ItemBottom>
//             </Item>
//           );
//         })}
//       </ItemGroup>
//     </Wrapper>
//   );
// };
// export default MarketTrend;
const MarketTren = ()=>{
  return(
    <></>
  )
}
export default MarketTren;
