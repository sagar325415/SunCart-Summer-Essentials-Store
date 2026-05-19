
export const getData=async()=>{
     const res = await fetch('https://data-server-l7ws.onrender.com/products');
     return res.json();
    
}