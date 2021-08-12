let password = document.getElementById("pass");
let verifyPass = document.getElementById("passverify"); 

function validatePassword(){
  if(password.value !== verifyPass.value) {
    verifyPass.setCustomValidity("Ensure Passwords Match");
  } else {
    verifyPass.setCustomValidity('');
  }
}


function populateDelivery(){
  const checkbox = document.getElementById("sameAsBill").checked;
  console.log(checkbox, "This is my check box");
    if(checkbox){
        firstnameD.value = firstname.value;
        lastnameD.value = lastname.value;
        addressD.value = address.value;
        cityD.value = city.value;
        statesD.value = states.value;
    }
    else{
      firstnameD.value = "";
        lastnameD.value = "";
        addressD.value = "";
        cityD.value = "";
        statesD.value = "";
    }
}


function display(){
  const result = document.getElementById("output");

  const url = document.location.search;  
  const urlParams = new URLSearchParams(url);  
  
  const query = url.substring(1); //.replace("+", " ")

  let items = query.split('&');
  for(let i=0; i<items.length; i++){
    // console.log(items[i]);
    result.innerHTML += items[i] + "<br />";
  }
  
  // console.log('URL ', url);
  // console.log('QUERY', query);


  //above is what he showed in class
  //below is what i submitted and i got full points so this works too
  // var queryString = decodeURIComponent(window.location.search);
  // queryString = queryString.substring(1).replace("+", " ");
  // var queries = queryString.split("&");
  
  // for (var i = 0; i < queries.length; i++)
  // { 
  //   document.write(queries[i] + "<br>");
  // } 
}
