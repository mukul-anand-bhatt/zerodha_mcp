// import { KiteConnect } from "kiteconnect";
// import 'dotenv/config';
// const accesstoken="7w55GedDzeIUSqmRRD4JjlENZ6lxKjwT"
// const api_key="x5i8c0lauak0eert"
// const api_secret="nrkri9wp09dezmvx0wtt46z2p9bmvwot"

// const kc = new KiteConnect({ api_key:  api_key});

// // console.log(kc.getLoginURL());

// export async function placeOrder(tradingsymbol: string, quantity: number, type:"BUY" | "SELL") {
//   try {
//     kc.setAccessToken(accesstoken);
//     await kc.placeOrder("regular",{
//         exchange:"NSE",
//         tradingsymbol,
//         transaction_type:type,
//         quantity,
//         product:"CNC",
//         order_type:"MARKET"
//     });
//     // console.log("Profile:", profile);
//   } catch (err) {
//     console.error("Error getting profile:", err);
//   }
// }
// // Initialize the API calls








import { KiteConnect } from "kiteconnect";
// import 'dotenv/config';


const kc = new KiteConnect({ api_key:  api_key});

console.log(kc.getLoginURL());

async function init(){
  try{
    // await generateSession();
    kc.setAccessToken(accesstoken);
    await getProfile();
  }catch (err){
    console.log(err);
  }
}

// async function generateSession() {
//   try{
//     const response  = await kc.generateSession(requesttoken,api_secret);
//     console.log(response.access_token);
//     kc.setAccessToken(response.access_token);
//     console.log("session genrated:", response);
//   }catch (err){
//     console.log("error genrating session", err);
//   }
// }

async function getProfile(){
  try{
    const profile = await kc.placeOrder("regular",{
      exchange:"BSE",
      tradingsymbol:"HCL-INSYS",
      transaction_type:"BUY",
      quantity:1,
      product:"CNC",
      order_type:"MARKET"
    });
    console.log("Profile:", profile);
  }catch(err){
    console.log("Error getting Profile", err);
  }
}
init()
// Initialize the API calls

