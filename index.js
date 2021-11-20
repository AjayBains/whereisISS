const api_url = "https://api.wheretheiss.at/v1/satellites";

const getISS = async()=>{

   const response =  await fetch(api_url);
   const data = await response.json();
   const {id} = data[0];
   const api2 = `https://api.wheretheiss.at/v1/satellites/${id}`
   const response2 = await fetch(api2);
   const locationData = await response2.json();
   console.log(locationData);
  

}

getISS();