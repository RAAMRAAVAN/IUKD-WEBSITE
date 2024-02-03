import axios from 'axios';
import { useEffect } from 'react';
export const TextLocal = () => {
    const apiKey = 'NjM0NzU3NmU1ODcwNmI3MTMyNWE2YTQ3NTM3NzU2Nzc=';
    const senderName = 'IUKD';
    const message = 'Hello Ram';
    const phoneNumber = '+916900477992'; // Include country code, e.g., +1234567890
    const templateId = '942463'; // Replace with your actual template ID
    const apiUrl = 'https://api.textlocal.in/send';
    
    const params = {
      apiKey,
      numbers: phoneNumber,
      sender: senderName,
      message:templateId,
    //   template: , // Use the template ID instead of the message
    };
    useEffect(()=>{
        const sentSMS =  axios.post(apiUrl, null, { params })
        .then(response => {
          console.log('SMS Sent Successfully:', response.data);
        })
        .catch(error => {
          console.error('Error sending SMS:', error.response.data);
        });
    },[])
    
    return(<>Message Sending</>)
} 