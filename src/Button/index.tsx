import React from 'react';
import '../style.css'

type ButtonProps = {

}

const Button: React.FC<ButtonProps> = (props) => <button className='btn'>{props.children}</button>;
export default Button
