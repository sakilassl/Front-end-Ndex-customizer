
import { Link,useNavigate } from 'react-router-dom'
import React, { useRef, useEffect, useState } from 'react'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import styled from 'styled-components'
import axios from 'axios'
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`
function Paypal({amount}) {
  const [show, setShow] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [orderId, setOrderId] = useState(false)
  const [checkout, setCheckout] = useState(false)
  const navigate = useNavigate();
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: 'user@gmail.com',
            amount: {
              currency_code: 'USD',
              value: amount,
            },
          },
        ],
        application_context: {
          shipping_preference: 'NO_SHIPPING',
        },
      })
      .then((orderID) => {
        setOrderId(orderID)
        return orderID
      })
  }

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      console.log(details)
      console.log(details.id)
      console.log(details.status)
      console.log(details.payer.email_address)
      setSuccess(true)
      var data = JSON.stringify({
        "orderId": "O004",
        "userId": "6008",
        "payerId": details.id,
        "paymentStatus": details.status,
        "amount": amount,
        "email": details.payer.email_address
      });
      
      var config = {
        method: 'post',
        url: 'http://localhost:8082/payment',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
    })
  }
  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
      navigate(`/successfull`)
    }
  },
  [success]
);


  const onError = (data, actions) => {
    setErrorMessage('An error occured with your payment')

  }

  return (
    <div>
      <PayPalScriptProvider
        options={{
          'client-id':
            'AesnfagOrssT91TSgQFgdx5z_JWr5__VoikrT_qWW4rwnNuAgxa8vmmiPd1MfOmC3gFVlW1WFptsAOel',
        }}
      >
        {checkout ? (
          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
          />
        ) : (
          <>
            <Button
              onClick={() => {
                setCheckout(true)
              }}
            >
              PAY NOW
            </Button>
          </>
        )}
      </PayPalScriptProvider>
    </div>
  )
}

export default Paypal