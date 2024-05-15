"use client";
import React, { useState } from "react";
import safeCheckout from "@/assets/safe-checkout.jpg";
import stripeImage from "@/assets/powered-stripe.png";
import Image from "next/image";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from "axios";
import CheckoutForm from "@/components/CheckoutForm";

const Checkout = () => {


  return (
    
    <>
    
    
    <CheckoutForm />
    </>

  );
};

export default Checkout;
