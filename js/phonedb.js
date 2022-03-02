     // search input
     const searchphone = () => {
    const inputvalue = document.getElementById('inputname');
    const myphone = inputvalue.value;

     inputvalue.value = '';
      //check input value

    if (myphone == '') {
      document.getElementById('phoneDetail').innerHTML='';
      document.getElementById('massage').innerText="please write a phone name";

    }


    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${myphone}`;
        fetch(url)
            .then(res => res.json())
         .then(data => displayphone(data.data))
          }
               }

     //dispaly search info
 const displayphone = phone => {
     const phonelist = document.getElementById('phonelist');
     phonelist.innerHTML='';
     document.getElementById('phoneDetail').innerHTML='';
     document.getElementById('massage').innerHTML='';


     console.log(phone.length);
        //massage  if  search phone is not found

     if (phone.length == 0) {
       document.getElementById('massage').innerText="This phone is detail is not  available";

     }
      
       
       let size=20;
     phone.slice(0,size).map(phone => {
     
     
       const phonelist = document.getElementById("phonelist")
        const div = document.createElement('div');
        div.style.backgroundColor="black"
        div.classList.add('col-md-4');
      //display searh info
       div.innerHTML = `
      <div class="card  border shadow-sm text-light  bg-dark m-0  ">
      <div class="d-flex justify-content-center">
      <div>
      <img src="${phone.image}" class="card-img-top " alt="...">
      <div class="card-body">
          <h4 class="card-title">Name: ${phone.phone_name}</h4>
          <p class="card-text"> Brand: ${phone.brand}</p>
         <button onclick="phonedetails('${phone.slug}')">Details</button>

       </div>
      </div>
      </div>
      </div>

       `;
       phonelist.appendChild(div);
        
       
     })
}
 
//phone detail
  const phonedetails = phoneid => {
    console.log(phoneid);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneid}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayphoneinfo(data.data));
}

       const displayphoneinfo = phone => {
      console.log(phone.brand);
      const phoneDetail = document.getElementById('phoneDetail');
      phoneDetail.textContent = '';
     
     
        const div = document.createElement('div');
             div.classList.add('card');
          const release = phone.releaseDate;

        const releaseinfo = (date)=>{
          if(date == '')
          {
            return  " relese date not found";
          }
       else {
          return date;
         }
         
     }
     const releasedate= releaseinfo( release);

      //display detail info


     div.innerHTML = `
    <div class=" phonein-formation p-3 d-flex justify-content-center bg-dark " > 
    <img src="${phone.image}" style="width: 20rem; class=" p-3 card-img-top" alt="..."></div>


    <div class="card-body bg-dark text-light">
    <h5 class="card-title">${phone.name}</h5>
   
    <table class="table table-bordered table-dark tabel-responsive-sm tabel-responsive-md">

    <tr>
    <th  scope="row">Brand</th>
    <td colspan="2">${phone.brand} </td>
    
  </tr>
    
  <tr>

    <th  scope="row">Release Date</th>
    <td  colspan="2"> ${releasedate}</td>
  </tr>

  
<tr>
  <th rowspan="5" scope="row">Main Features</th>
  <td>Chip set</td>
  <td>${phone.mainFeatures.chipSet}</td>
   </tr>
   
   <tr>
   <td> Display</td>
   <td>${phone.mainFeatures.displaySize}</td>
    </tr>

   <tr>
   <td> Memory</td>
   <td>${phone.mainFeatures.memory}</td>
    </tr>
    <tr>
    <td> Sensors</td>
    <td>${phone.mainFeatures.sensors}</td>
     </tr>
    
     <tr>
     <td> Storage</td>
     <td>${phone.mainFeatures.storage}</td>
      </tr>
      <tr>
  <th rowspan="6" scope="row">Others</th>
  <td>Bluetooth</td>
  <td>${phone.others.Bluetooth}</td>
   </tr>
   
   <tr>
   <td> GPS</td>
   <td>${phone.others.GPS}</td>
    </tr>

   <tr>
   <td> NFC</td>
   <td>${phone.others.NFC}</td>
    </tr>
    <tr>
    <td> Radio</td>
    <td>${phone.others.Radio}</td>
     </tr>
    
     <tr>
     <td> USB</td>
     <td>${phone.others.USB}</td>
      </tr>
      <tr>
      <td> WLAN</td>
      <td>${phone.others.WLAN}</td>
       </tr>
      
    
  </tbody>
</table>
        
     </div>
     `;
     phoneDetail.appendChild(div);
}
   
 document.getElementById('phonebtn').addEventListener("click",()=>{
  document.getElementById('phonelist').innerHTML='';
  document.getElementById('massage').innerHTML='';



}); 


    