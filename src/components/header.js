import Button from "./Button";
import PropTypes from 'prop-types'


const Header = ({title}) => {
    const onclick = ()=>{
        console.log("click")
    }
    return (
        <header className='header'>
          <h1>{title}</h1>
          <Button color="green" text="Add" onclick={onclick} />
    
          
        </header>  
    )
}
Header.defaultProps={
    title:'Task tracker'
}
Header.propTypes={
    title : PropTypes.string
}

export default Header
