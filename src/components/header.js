import Button from "./Button";
import PropTypes from 'prop-types'


const Header = ({title,addtask,presentstate}) => {
  
    return (
        <header className='header'>
          <h1>{title}</h1>
          <Button color={presentstate?"red":"green"} text={presentstate?"collapse":"Add"} onclick={addtask} />        
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
