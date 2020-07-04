import React,{useState} from 'react'

const HcardBuilderHook = (callback) => {
    const [inputs, setInputs] = useState({});   
    const handleInputChange = (event) => {
      console.log(event.target.value, event.target.name);
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {    
      handleInputChange,
      inputs
    };
  }

  export default HcardBuilderHook