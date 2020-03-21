import React,{useState,useEffect} from 'react';
import './Text_Input.css'


const Text_Input = (props)=>{
    const {name,id,value,onChange,size,type,maxLength,required,placeholder} = props
    const [val,setVal] = useState("")

    useEffect(()=>{
        setVal(val)
    },[value])

    const changeEvent = (event) =>{
        setVal(event.target.value)
        if(onChange){
            onChange(event.target.value)
        }
    }
    return(
        <div className="container_padding">
            <input className="text_input"
                id={id}
                name={name}
                value={val}
                size={size || 50}
                type={type}
                maxLength={maxLength}
                required = {required || false}
                placeholder={placeholder}
                onChange={changeEvent}
            />
        </div>
    )

}

export default Text_Input