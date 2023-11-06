const products = document.getElementById("products");

// 1

// fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {

//         let bahali = 0;

//         data.forEach(item => {
//             if (item.unitPrice > bahali) {
//                 bahali = item.unitPrice;
//                 bahaliolan = item;
//             }
//         });
//     console.log(bahaliolan.name);
//     console.log(bahali);
        
//     });

// 2

// fetch("https://northwind.vercel.app/api/products")
//   .then((res) => res.json())
//   .then((data) => {
//     let sum = 0;

//     for (let i of data) {
//       sum += i.unitsInStock;
//     }
//     let a = data.length;
//     console.log(sum / a);
//   });

// // 3

// fetch("https://northwind.vercel.app/api/products")
//   .then((res) => res.json())
//   .then((data) => {
//     let a = data.filter((item) => item.name[0] == "C");
//     console.log(a);
//   });

// // 4

// fetch("https://northwind.vercel.app/api/customers")
//   .then((res) => res.json())
//   .then((data) => {
//     let a = data.filter((item) => item.address.city == "London");
//     console.log(a);
//   });

// // 5

// fetch("https://northwind.vercel.app/api/customers")
//   .then((res) => res.json())
//   .then((data) => {
//     let a = data.filter((item) => item.address.region == "NULL");
//     console.log(a);
//   });

// // 6

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     let a = data.filter((item) => item.userId == 1);
//     console.log(a.length);
//   });

// // 7

// fetch("https://jsonplaceholder.typicode.com/albums")
//   .then((res) => res.json())
//   .then((data) => {
//     let albom = data.filter((item) => item.userId == 1);
//     console.log(albom.length);
//   });
