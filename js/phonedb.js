     const searchphone = () => {
    const inputvalue = document.getElementById('inputname');
    const myphone = inputvalue.value;

     inputvalue.value = '';
    if (myphone == '') {
    }

    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${myphone}`;
        fetch(url)
            .then(res => res.json())
         .then(data => displayphone(data.data))
          }
               }


 const displayphone = phone => {
     const phonelist = document.getElementById('phonelist');
     console.log(phone);
     phonelist.innerHTML='';
 
     if (phone.length == 0) {

     }

         
     phone.forEach(phone => {
      console.log(phone);
       const phonelist = document.getElementById("phonelist")
        const div = document.createElement('div');
        div.style.backgroundColor="black"
        div.classList.add('col-md-4');
     div.innerHTML = `
       <div class="card   shadow-sm text-dark p-3 ps-5 m-0 border b">
       <img src="${phone.image}" class="card-img-top " alt="...">
           <div class="card-body">
                <h5 class="card-title">Name: ${phone.phone_name}</h5>
                <p class="card-text"> Brand: ${phone.brand}</p>
                <button type="button" class="btn text-black rounded-0 btn mt-0 p-0 ps-4 pe-4 "
          style="border:2px solid black; "> Details <i class="fas fa-arrow-right"></i> </button>

            </div>
       </div>
       `;
       phonelist.appendChild(div);
       
   })
    }

