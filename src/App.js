// import { useState } from "react";

// import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
// import Con from " ./contact "
import Navbar from "./navbar";
import About from "./about";
// function Simple() {
//   const [text] = useState("king");
//   const first = text || "mallu";
//   const second = text && "sachin";
//   return (
//     <>
//       <h1>{first}</h1>
//       <h1>{second}</h1>
//     </>
//   )
// }
// export default Simple;
// 👉 && → stops when it finds false
// 👉 || → stops when it finds true
// both well return the last values


// function Login() {
//   const [user, setUser] = useState(true);

//   function handleClick() {
//     setUser(false);
//   }

//   return (
//     <>
//       {user ? <h1>Welcome to JS</h1> : <h1>Please Login</h1>}

//       <button onClick={handleClick}>
//         Click here to register
//       </button>
//     </>
//   );
// }

// export default Login;
// function App() {
//   const [pass, setPass] = useState("")

//   function Passa(e) {
//     setPass(e.target.value)
//   }

//   return (
//     <>
//       <input type="password" placeholder="enter your password" onChange={Passa}></input>
//       {pass.length < 10 ? <p>password shoulbe long</p> : null}
//     </>
//   )
// }
// export default App;
// function Data() {
//   const [user, setUser] = useState("mallu")
//   function Change() {
//     setUser("")
//   }
//   return (
//     <>
//       {user ? <h1>hello mallu lets learn the english</h1> : <h2>hello lets the backneds</h2>}
//       <button onClick={Change}>click here </button>
//     </>
//   )
// }
// export default Data;
// function Form() {
//   function Click(e) {
//     e.preventDefault();
//     alert("hello mallikarjuna all the best for yuor future");
//   }
//   return (
//     <>
//       <form onSubmit={Click}>
//         <label>enter name:</label>
//         <input type="text" id="name"></input>
//         <label> enter your password:</label>
//         <input type="password" id="pass"></input>
//         <button >sumbit</button>
//       </form>
//     </>
//   )
// }
// export default Form;
// useing value and onchange
// function From() {
//   const [name, setName] = useState("")
//   const [age, setAge] = useState("")
//   function Click(e) {
//     setName(e.target.value)
//   }
//   function Pass(e) {
//     setAge(e.target.value)
//   }
//   function Sumbit(e) {
//     e.preventDefault();
//     alert("the name of the student is", name, "the age is ", age);
//   }

//   return (
//     <>
//       <form onSubmit={Sumbit}>
//         <label>enter name:</label>
//         <input type="text" id="name" value={name} onChange={Click}></input>
//         <label> enter your password:</label>
//         <input type="password" id="pass" onChange={Pass}></input>
//         <button >sumbit</button>
//       </form>
//     </>
//   )
// }
// export default From;
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )

}
export default App;