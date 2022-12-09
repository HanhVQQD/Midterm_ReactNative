// // const categories = [
// //   {id: '1', name: 'pizza', image: require('../assets/catergories/pizza.png')},
// //   {id: '2', name: 'Burger', image: require('../assets/catergories/burger.png')},
// //   {id: '3', name: 'Sushi', image: require('../assets/catergories/sushi.png')},
// //   {id: '4', name: 'Salad', image: require('../assets/catergories/salad.png')},
// // ];

// // export default categories;

// import axios from 'axios';
// import {useEffect, useState} from 'react';

// function categories() {
//   const [listNews, setListNews] = useState([]);
//   const getData = () => {
//     axios
//       .get(`https://61bc10c1d8542f0017824533.mockapi.io/updatenew`)
//       .then(news => {
//         setListNews(news.data);
//       });
//   };
//   useEffect(() => {
//     // console.info(Math.random())
//     getData();
//   }, []);

//   return <div></div>;
// }
// export default categories;
