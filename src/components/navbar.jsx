import React, {useState, useEffect} from "react";
import MenuItems from "./menuItems";


const Navbar = () => {
    return <nav className="py-4 bg-light">
       <div className="container" >
        <img width="70px" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"/>

        <MenuItems/>

        </div> 
    </nav>
}
export default Navbar;

// React hooks allows the use of features of class components 
// const Navbar = () => {
    // number carrys the state 
    // setNumber is the function used to change the state
    // const [number, setNumber] = useState(20);
    // this hold the data in the state
    // const [showModal, setShowModal] = useState(false);
    // const [name, setName] = useState("User(Default)");
    // const [adminLoggIn, setAdminLoggIn] = useState(false);
    // const [number, setNumber] = useState(20);
    // const [extra, setExtra] = useState("What day is it");

    // useEffect(() => {
        // handles components mounting(componentDidMount) and updating (componentDidUpdate)
        // alert("Updating ");
        // return () => {
            // handles component unmounting
            // alert("Removing");

        // }
    // dependancy array is brouth is when you want one action to affect the componement 
//     }, [adminLoggIn]);

//     return (
//         <nav className="py-4 bg-light">
//        <div className="container" >
//         <img width="70px" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"/>

//         <MenuItems/>

//         <button>Hello {name}</button> 
//         <button onClick={() => setName("Favour")}>Change User </button> 
//         </div> 

//         <div className="container"> 
//             <button onClick={() => setNumber(number - 1)}>-</button> {number} <button onClick={() => setNumber(number + 1)}>+</button>        
//             <div>{extra}</div>
//             <button onClick={() => setExtra("Monday")}>Days of the week</button> 
//             <button onClick={() => setAdminLoggIn(true)}>Admin</button> 
//             <button onClick={() => setAdminLoggIn(false)}>User</button> 
//             {adminLoggIn ? <Admin/> : <User/>}

//         </div>
//     </nav>
//     );
// };
// npm i react-router-dom
// to 


//   const Admin = ()=> {
//         return <> I am the Admin</>
//     };

//     const User = ()=> {
//         return <> I am the User</>
//     };


// export default Navbar;




// const SayHi = () => {
//     alert("Hi");
// };

// const Navbar = () => {
//     return <nav className="py-4 bg-light">
//        <div className="container" >
//         <img width="70px" src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"/>

//         <MenuItems/>

//         <button onClick={SayHi}>Hello</button> 
//         </div> 
//     </nav>
// };








// const Navbar = (props) => {
//     return <nav className="nav-bar">
//         <div>{props.logo}</div>
//         <div>Meni-Items</div>
//     </nav>
// };