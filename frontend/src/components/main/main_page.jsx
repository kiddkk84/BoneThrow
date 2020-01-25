// import React from 'react';

// class MainPage extends React.Component {

//     render() {
//         return (
//             <div>
//                 <h1>BoneThrow</h1>
//                 <footer>
//                     Copyright &copy; 2019 Bones
//         </footer>
//             </div>
//         );
//     }
// }

// export default MainPage;

// import React from "react";
// import Layout from '../layout/Layout'
// // const { google }= require('./google'); // put your key in google.js in the same file


// const MainPage = () => (
//     <Layout title="BoneThrow" description="Bone Throw APP">
//         ...
//         {/* <button onClick={()=>getLatLong()}>Click me to get your latitude and longitude</button> */}
//     </Layout>
// )



// const getLatLong = (address = '825 bAtterY st SANFANCISCO') => {
//     let urlAddress = address.split(" ").join("+").toLowerCase()
//     return window.$.ajax(
//         {
//             url: `https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${google}`,
//             method: `get`,
//             success: function (data) {
//                 console.log(data["results"][`0`].geometry.location)
//                 window.lat = data["results"][`0`].geometry.location.lat
//                 window.lng = data["results"][`0`].geometry.location.lng
//             },
//             error: function (error) {
//                 console.log(error)
//             },
//         }
//     )
// }


// export default MainPage;