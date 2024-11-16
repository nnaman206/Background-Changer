import { useState } from 'react';

function App() {
  const [color, setColor] = useState("black")
  



  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor:color }}
    >
      <div className="fixed flex flex-wrap justify-center justify-items-center bottom-12 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center  justify-items-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
          <button onClick={()=>setColor("Red")} className="outline-none px-4 py-1 rounded-xl text-white shadow-xl justify-center" style={{backgroundColor:"red"}}>Red</button>
        
        <button onClick={()=>setColor("Blue")}  className="outline-none px-4 py-1 rounded-xl text-white shadow-xl justify-center" style={{backgroundColor:"Blue"}}>Blue</button>
        <button onClick={()=>setColor("Yellow")}  className="outline-none px-4 py-1 rounded-xl text-white shadow-xl justify-center" style={{backgroundColor:"Yellow"}}>Yellow</button>
        <button onClick={()=>setColor("Green")}  className="outline-none px-4 py-1 rounded-xl text-white shadow-xl justify-center" style={{backgroundColor:"Green"}}>Green</button>
        <button onClick={()=>setColor("olive")}  className="outline-none px-4 py-1 rounded-xl text-white shadow-xl justify-center" style={{backgroundColor:"Olive"}}>olive</button>
        <button onClick={()=>setColor("Purple")}  className="outline-none px-4 py-1 rounded-xl text-white shadow-xl justify-center" style={{backgroundColor:"Purple"}}>Purple</button>
        <button onClick={()=>setColor("Orange")}  className="outline-none px-4 py-1 rounded-xl text-white shadow-xl justify-center" style={{backgroundColor:"Orange"}}>Orange</button>
        <button onClick={()=>setColor("Grey")}  className="outline-none px-4 py-1 rounded-xl text-white shadow-xl justify-center" style={{backgroundColor:"Grey"}}>Grey</button>



        
        </div>
      </div>
    </div>
  )
}
export default App