import React from 'react'
import { LineChart, Line, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis  } from 'recharts';
import Navbar from "./navbar";
import { BsPatchQuestion,BsGraphUp ,BsPercent } from 'react-icons/bs';
const Main = () => {




const data=[{
  "name":"Inheritance",
  "uv":50,



},

{
  "name":"Marriage",
  "uv":40


},

{
  "name":"Corruption",
  "uv":30


},
{
  "name":"Criminal",
  "uv":20


},
{
  "name":"Corruption",
  "uv":30


},{
  "name":"Corruption",
  "uv":30


},{
  "name":"Corruption",
  "uv":40


},{
  "name":"Corruption",
  "uv":10


}
]

  return (

   
    <div style={{marginLeft:'180px',marginTop:'18px',paddingTop: '77px'}} > 
    <div style={{height: '50%',marginLeft:'43px'}}>

    <div className="card" style={{background: '#1D4537',width: '22%',height: '30%',marginTop:'10px',marginLeft:'8%'}}> 
    <h2  style={{background:'#1D4537'  ,color:'white',width: '100%',height: '30%'}}>Question Asked</h2>
    <p  style={{width: '100%',backgroud: '#1D4537',color:'white',height: '30%'}}>1890</p>
    <BsPatchQuestion className='tainmodel2'/>
    </div>
    <div className="card" style={{background: '#1D4537',color:'white',width: '22%',height: '30%',marginTop:'-159px',marginLeft:'35%'}}> 
    <h2  style={{background: '#1D4537',width: '100%',color:'white',height: '30%'}}>Acurracy</h2>
    <p  style={{width: '100%',backgroud: '#1D4537',color:'white',height: '30%'}}>78.8%</p>
    <BsPercent className='tainmodel2'/>
    </div>
    <div className="card" style={{background: '#1D4537',color:'white',width: '22%',height: '30%',marginTop:'-159px',marginLeft:'63%'}}> 
    <h2  style={{background: '#1D4537',width: '100%',color:'white',height: '30%'}}>App ussage</h2>
    <p  style={{width: '100%',backgroud: '#1D4537',color:'white',height: '30%'}}>78.8%</p>
    <BsGraphUp className='tainmodel2'/>
    </div>
    </div>
  <div className="blur-background" style={{flexDirection:'row',marginLeft:'45px',marginTop: '3%',justifyContent:'center', height:600, width: '100%'}} class="row">
  <div style={{padding:'19px',paddingLeft:'-10px',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',marginLeft:'-115px',display:'flex',width:'40%' ,height:'315px '}}>
  <LineChart style={{color:'#1D4537'}} width={500} height={300} data={data}>
  <XAxis dataKey="name"/>
  <YAxis/>
  <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
  <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
</LineChart>
</div>
<div style={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',marginLeft:'35px',display:'flex',width:'40%' ,height:'315px ',padding:'23px'}}>

      <BarChart
        width={450}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Bar dataKey="pv" fill="#8884d8" /> */}
        <Bar  dataKey="uv" fill="#1D4537" />
      </BarChart>
   </div>
      </div>
      </div>

  )
}

export default Main

// import React, { useEffect, useState } from 'react';
// //import { MultipleSelectList } from 'react-native-dropdown-select-list'
// import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import { CategoryData } from "./categorydata";
// import { RestaurantData } from './Data'
// import { Searchbar } from 'react-native-paper';
// import { database } from '../firebase';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// export default function MainScreen({ navigation, route }) {

//   const [name, setName] = useState("");
//   const [restaurants, setRestaurants] = useState([]);
//   const [userId, setUserId] = useState("");
//   const [filter, setFilter] = useState("") 

//   async function fetchData() {
//     try {
//       const value = await AsyncStorage.getItem("uid")
//       if (value !== null) {
//         setUserId(value);
//         database
//           .ref(`/users/${value}`)
//           .once("value")
//           .then(snapshot => {
//             database.ref('/restaurants/').once('value').then((snap) => {
//               let finalName = snapshot.val().firstName + snapshot.val().lastName
//               setName(finalName)
//               if(filter.length == 0){
//                 console.log("I am notttttttt filteredddddd")
//                 setRestaurants(snap.val().items)
//               } else{
//                 console.log("I am filteredddddd")
//                 let tempDataa = snap.val().items
//                 console.log("This is tempraryyy Data", tempDataa)
//                 var newArray = tempDataa.filter(function (el)
//                   {
//                     return el.restaurantName.includes(filter)
//                   }
//                   );
                  
//                 console.log("THis is New Array Data", newArray)
//                 setRestaurants(newArray) 
//               }
//               console.log(restaurants)
//             })
//           });
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <View style={{ borderRadius: 45, backgroundColor: "white", flex: 1 }}>
//       <View style={{ marginTop: 25, flexDirection: 'row' }}>
//         <Image
//           style={{ marginLeft: 20, borderRadius: 10, marginTop: 2, width: 65, height: 65 }}
//           source={require('../assets/images/logopic.jpg')}
//         />
//         <View style={{ marginTop: 2, flexDirection: 'column' }}>

//           <Text style={{ fontFamily: 'Poppins-Medium', color: '#274116', fontSize: 12, marginTop: 10, marginLeft: 10 }}>
//             Good Morning
//           </Text>
//           <Text style={{ fontFamily: 'Poppins-Medium', color: '#274116', fontSize: 16, marginLeft: 10 }}>
//             {name}
//           </Text>
//         </View>

//       </View>

//       <View style={{ marginTop: 10, marginLeft: 15 }} >
//         <Searchbar

//           placeholder="Search Category or restaurant" style={{ borderRadius: 67, width: 360, fontSize: 15, backgroundColor: "white" }} placeholderTextColor={'grey'} iconColor='green' value = {filter} onChangeText = {setFilter} onSubmitEditing = {fetchData}/>
//       </View>
//       <View style={{ marginTop: 20 }}>
//         <Image
//           style={{ borderRadius: 24, marginLeft: 20, width: 360, height: 180 }}
//           source={require('../assets/images/homePic.jpg')}
//         />

//         <View>
//           <View style={{ marginTop: 10 }}>
//             <Text style={{ fontFamily: 'Poppins-Bold', marginTop: 7, color: '#274116', fontSize: 22, marginTop: 5, marginLeft: 15 }}>
//               Categories
//             </Text>
//           </View>
//           <FlatList
//             horizontal
//             data={CategoryData}
//             keyExtractor={item => item.id}
//             renderItem={({ item, index }) =>
//               <View>
//                 <View style={{ marginTop: 7, flexDirection: 'column' }}>

//                   <Image
//                     style={{ marginTop: 5, marginLeft: 16, borderRadius: 13, width: 100, height: 87 }}
//                     source={{ uri: item.image }}
//                   />
//                   <Text style={{ fontFamily: 'Poppins-SemiBold', marginTop: 5, color: '#274116', fontSize: 16, marginTop: 5, marginLeft: 50 }}>
//                     {item.category}
//                   </Text>

//                 </View>

//               </View>
//             }
//           />

//         </View>
//         <View>
//           <View style={{ marginTop: 10 }}>
//             <Text style={{ fontFamily: 'Poppins-Bold', marginTop: 10, color: '#274116', fontSize: 22, marginTop: 5, marginLeft: 15 }}>
//               Restaurants
//             </Text>
//           </View>
//           <FlatList
//             horizontal
//             data={restaurants}
//             renderItem={({ item, index }) =>
//               <TouchableOpacity onPress={() => navigation.navigate("Restaurant", {
//                 item: item
//               })}>
//                 <View style={{ marginTop: 10, flexDirection: 'column' }}>
//                   <Image
//                     style={{ marginTop: 5, marginLeft: 24, borderRadius: 10, width: 150, height: 100 }}
//                     source={{ uri: item.photo }}
//                   />
//                   <View style={{ flexDirection: 'row' }}>
//                     <Text style={{ fontFamily: 'Poppins-SemiBold', marginTop: 5, color: '#274116', fontSize: 17, marginLeft: 25}}>
//                       {item.restaurantName}
//                     </Text>
                    
//                      <View style={{flexDirection: 'row', paddingTop: 7}}>
//                      <MaterialIcons name="star-rate" color="#F8F26F" size={15} style={{paddingLeft: 2}}></MaterialIcons>
//                       <Text style={{ fontFamily: 'Poppins-Medium', color: 'peru', fontSize: 14,}}>
//                         {item.rating}
//                       </Text>
//                      </View>
                   
//                   </View>
//                 </View>
//               </TouchableOpacity>
//             }
//           />

//         </View>

//       </View>

//     </View>

//   );
// }