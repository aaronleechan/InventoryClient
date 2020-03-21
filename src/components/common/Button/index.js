import React from 'react'

const Button = (props) =>{
    const {type,value,width,height,fontSize,backgroundColor} = props

    const button_style_inline_style = {
        width: width || "200px",
        height: height || "52px",
        fontSize: fontSize || "30px",
        borderRadius: "15px",
        color: "white",
        backgroundColor: backgroundColor || "green"
    }


    return(
        <div className="container_padding">
            <input style={button_style_inline_style}  type={type} value={value}/>
        </div>
    )
}

export default Button