import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxios from '../../../Hooks/useAxios';

const PaymentSuccess = () => {
    const [searchParams]=useSearchParams();
    const axios = useAxios();
    const [paymentInfo , setpaymentInfo]= useState([])
    const sessionId = searchParams.get('session_id')
    // console.log(sessionId);
    console.log(paymentInfo);
    useEffect(()=>{
        if(sessionId){
            axios.patch(`/verify-payment-success?session_id=${sessionId}`)
            .then(res=>{
                console.log(res.data);
                setpaymentInfo({transtionId:res.data.transtionId, trackingId: res.data.trackingId})
            })

        }

    },[sessionId])
    return (
        <div>
            this is succesfully you get payment
            
        </div>
    );
};

export default PaymentSuccess;