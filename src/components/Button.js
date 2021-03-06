function Button({color,text,onclick}) {
    return <button onClick={onclick} style={{background : color}} className='btn'>{text}</button>
}
Button.defaultProps={
    color:'steelblue'
}
export default Button 

