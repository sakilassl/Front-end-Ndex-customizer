
import React, { useRef, useEffect, useState } from 'react'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import styled from 'styled-components'
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`
function Paypal() {
  const [show, setShow] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [orderId, setOrderId] = useState(false)
  const [checkout, setCheckout] = useState(false)
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: 'user@gmail.com',
            amount: {
              currency_code: 'USD',
              value: 7,
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
      const { payer } = details
      console.log(details);
      setSuccess(true)
    })
  }

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