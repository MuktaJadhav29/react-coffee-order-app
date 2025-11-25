
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div style={{
      backgroundColor:"#fd79a8", 
      height:"100vh",
      width:"100vh",
      paddingTop: "20px",
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingBottom: "20px"
    }}> 
    <PostComponent/>
    <CafeDetailCard/> 
    </div>
  )
}

function PostComponent(){
return<div style = {{
  width: 231, 
  backgroundColor: "white", 
  borderRadius: 15, 
  borderColor: "gray", 
  borderWidth: 3, 
  display: "flex", 
  borderStyle: "solid",
   marginBottom: 10
  }}>
  <img src = {"https://cdn.pixabay.com/photo/2025/06/04/22/43/facade-9641925_1280.jpg"} style = {{
    width: 231,
    height: 320,
    borderRadius: 12,
    
  }}>
  </img>
  </div>
}

  function CafeDetailCard(){
    const initialMenuItems = [
    { id: 1, name: "Coffee", quantity: 0 }, 
    { id: 2, name: "Tea", quantity: 0 },
    { id: 3, name: "Cookies", quantity: 0 },
  ];

  const [menuItems, setMenuItems] = useState(initialMenuItems);
  
  const handleIncrement = {itemId} => {

  }
}
    
export default App
