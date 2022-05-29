import { useState } from "react";

const useHtttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
const sendRequest = async (requestConfig, transformData= null) => {
    try{

        const response =  await fetch(requestConfig.url, {
            method: requestConfig.method? requestConfig.method: 'GET',
            body: requestConfig.body?  requestConfig.body: {},
            headers: requestConfig.headers? requestConfig.headers: null,
        });
        if(!response){
            throw new Error("Request Failed")
        }
        const data = await response.json();

        if(!response.ok){
            let errorMessage = "Authentication failed"
            if(data && data.error && data.error.message){
                errorMessage= data.error.message;
            }
            throw new Error(errorMessage);
        }
        if(transformData){
            console.log(data);
            transformData(data)
        }

    }catch(error){
        setError(error.message || "Something went wrong")
    }
    setIsLoading(false);

}

return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest
}

}

export default useHtttp;