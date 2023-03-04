multi();
multiple();
async function multi(){
  try{
      
       let res= await fetch("https://63e1efdd109336b6cbfc7247.mockapi.io/products")

       let data= await res.json();
       
        
      displaymg(data);
  }
  catch(e){
      console.log("err:",e);
  }
  }
// function displaymg(mg_data){

// }