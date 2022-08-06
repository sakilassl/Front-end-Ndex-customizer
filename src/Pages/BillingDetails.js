import React, { useState } from "react";
import { Link } from 'react-router-dom';


import "./BillingDetails.css";
export default function BillingDetails() {
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [changeText1, setChangeText1] = useState("District");
    // const[userId, setuserId] = useState('');
    const[Email, setEmail] = useState('');
    const[FName, setFName] = useState('');
    const[LName, setLName] = useState('');
    const[Phone1, setPhone1] = useState('');
    const[Phone2, setPhone2] = useState('');
    const[Address, setAddress] = useState('');
    const[District, setDistrict] = useState('');
    const[City, setCity] = useState('')
    const [errorMessage,setErrorMessage] = useState();


    
    const userId = "6007";
    const senddata = async() => {
        if (isNotValid()){
            return;
        }
       
        var axios = require('axios');
        var data = {
          userId : userId,
          email : Email,
          firstName : FName,
          lastName : LName,
          phoneOne : Phone1,
          phoneTwo: Phone2,
          address: Address,
          district: District,
          city : City
        }
        console.log(data)
        await axios.post('http://localhost:8082/billing',data)
        .then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        }); 
        


    }
    
  
    const HandleText1 = (e) => {
        setChangeText1(e);
        setDropdown1(false);
    };
    const isNotValid = () =>{
        var temp = false;
    
        if(Phone1 === ""){
            setErrorMessage("please enter a valid phone number")
            temp = true;
        }else if(Phone1.length > 10){
            setErrorMessage("phone number should be not exceeded 10 characters")
            temp = true;
        } else{
            setErrorMessage("")
        }
    }

    return (
        <div className="overflow-y-hidden">
            <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
                <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                    <div className="flex w-full  flex-col justify-start items-start">
                        <div className>
                            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
                        </div>
                        <div className="mt-2">
                            <a href="Shopping" className="text-base leading-4 underline  hover:text-gray-800 text-gray-600">
                                Continue To Shopping
                            </a>
                        </div>
                        <div className="mt-12">
                            <p className="text-xl font-semibold leading-5 text-gray-800">Billing Details</p>
                        </div>
                        <form action="/Checkout">
                        <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
                            <input onChange={(e) => {setEmail(e.target.value)}} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="email" placeholder="Email" required/>
                            <input onChange={(e) => {setFName(e.target.value)}} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="First Name" required/>
                            <input onChange={(e) => {setLName(e.target.value)}} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Last Name" />
                            <input onChange={(e) => {setAddress(e.target.value)}} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Address" required/>
                            <input onChange={(e) => {setPhone1(e.target.value)}} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Phone number primary" />
                                <p>{errorMessage}</p>
                            <input onChange={(e) => {setPhone2(e.target.value)}} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="Phone number secondary" />
                            <input onChange={(e) => {setDistrict(e.target.value)}} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="District" />
                            <input onChange={(e) => {setCity(e.target.value)}} className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full" type="text" placeholder="City" required/>
                        </div>
                        <button className="focus:outline-none focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800" onClick={()=>{senddata()}}>Proceed to payment
                        </button>
                        </form>

                        <div className="mt-4 flex justify-start items-center w-full">

                        </div>
                    </div>
                    <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
                        <div>
                            <h1 className="text-2xl font-semibold leading-6 text-gray-800">Billing Summary</h1>
                        </div>
                        <div className="flex mt-7 flex-col items-end w-full space-y-6">
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Email</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">{Email}</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Full Name</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">{FName} {LName}</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Address</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">{Address}</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Primary Phone number</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">{Phone1}</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Secondary Phone number</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">{Phone2}</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">District </p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">{District}</p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">City</p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">{City}</p>
                            </div>
                        </div>
                        {/* <div className="flex justify-between w-full items-center mt-32">
                            <p className="text-xl font-semibold leading-4 text-gray-800">Estimated Total </p>
                            <p className="text-lg font-semibold leading-4 text-gray-800">$2900</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
