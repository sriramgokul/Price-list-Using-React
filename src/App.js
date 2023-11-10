import React from "react";
import "./App.css";
function App() {

const data = [{
  head: "FREE",
  headb : "$0/month",
  data1:" ✔ Single User" ,
  data2:" ✔ 50GB Storage",
  data3:" ✔ Unlimited Public Projects" ,
  data4:" ✔ Community Access" ,
  data5:" ❌ Unlimited Private Projects " ,
  data6:" ❌ Dedicated Phone Supports " ,
  data7:" ❌ Free Subdomain " ,
  data8:" ❌ Monthly Status Reports " 

},
{
  head: "PLUS",
  headb : "$9/month",
  data1:" ✔ 5 Users" ,
  data2:" ✔ 50GB Storage",
  data3:" ✔ Unlimited Public Projects" ,
  data4:" ✔ Community Access" ,
  data5:" ✔ Unlimited Private Projects " ,
  data6:" ✔ Dedicated Phone Supports " ,
  data7:" ✔ Free Subdomain " ,
  data8:" ❌ Monthly Status Reports " 
 
},
{
  head: "PRO",
  headb : "$49/month",
  data1:" ✔ Unlimited Users" ,
  data2:" ✔ 50GB Storage",
  data3:" ✔ Unlimited Public Projects" ,
  data4:" ✔ Community Access" ,
  data5:" ✔ Unlimited Private Projects " ,
  data6:" ✔ Dedicated Phone Supports " ,
  data7:" ✔ Free Subdomain " ,
  data8:" ✔ Monthly Status Reports " 
  
}]

  return (
    <div className="App">
      {
        data.map((files, idx)=>(
          <Tariff key={idx}
          head={files.head}
          headb={files.headb}
          data1={files.data1}
          data2={files.data2}
          data3 = {files.data3}
          data4 = {files.data4}
          data5={files.data5}
          data6={files.data6}
          data7 = {files.data7}
          data8 = {files.data8}
          
          />
        ))
      }

    </div>

  )
 
}


export default App;

function Tariff({head, headb, data1, data2, data3, data4, data5, data6, data7, data8}) {

  return (
    <div class="container-fluid p-5 bg-primary">
      
      <div className="Box1">
        <div class="bg-light bd">
          <div className="bor1">
       <h6 id="head">{head}</h6>
       <h1 id="headb">{headb}</h1>
       <div className="bor2">
       <h6 class="p-2">{data1}</h6>
       <h6 class="p-2">{data2}</h6>
       <h6 class="p-2">{data3}</h6>
       <h6 class="p-2">{data4}</h6>
       <h6 class="p-2">{data5}</h6>
       <h6 class="p-2">{data6}</h6>
       <h6 class="p-2">{data7}</h6>
       <h6 class="p-2">{data8}</h6>
       <button type="button" class="btn btn-primary p-2 mt-2" id="button1">BUTTON</button>
       </div>
       </div>
       </div>
       </div>
       
    </div>
  )

}