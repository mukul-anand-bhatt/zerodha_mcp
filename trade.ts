import { KiteConnect } from "kiteconnect";
import 'dotenv/config';

const kc = new KiteConnect({ api_key:  process.env.KITE_API_KEY!});

export async function placeOrder(tradingsymbol: string, quantity: number, type:"BUY" | "SELL") {
  try {
    const profile = await kc.placeOrder("regular",{
        exchange:"NSE",
        tradingsymbol:"HDFCBANK",
        transaction_type:"BUY",
        quantity:1,
        product:"CNC",
        order_type:"MARKET"
    });
    console.log("Profile:", profile);
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}
// Initialize the API calls

