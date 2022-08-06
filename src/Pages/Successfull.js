import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";


function Successfull() {
    const[Email, setEmail] = useState('');
    const[City, setCity] = useState('')
    const [succ,setsucc] = useState([]);
    const id = "6007";

    useEffect(()=>{
        getrespone()
    },[])
    
    function getrespone(){
        axios.get(`http://localhost:8082/payment/${id}`).
        then((res)=>{
        setsucc(res.data);
         console.log(res);
      }).catch((err)=>{
       console.log(err);
       })
       }
       console.log(succ);

  return (
    <div>
        <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
                        <div>
                            <h1 className="text-2xl font-semibold leading-6 text-gray-800">Payment Successfull</h1>
                        </div>
                        <div className="flex mt-7 flex-col items-end w-full space-y-6">
                        
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">Hello, Thank you for shopping with us. Your payment for has been verified! </p>
                                {/* <p className="text-lg font-semibold leading-4 text-gray-600">{Assign.paymentStatus}</p> */}
                            </div>
                            <div className="flex justify-between w-full items-center">
                                {/* <p className="text-lg leading-4 text-gray-600">Amount</p> */}
                                {/* <p className="text-lg font-semibold leading-4 text-gray-600">{Assign.amount}</p> */}
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default Successfull