import './index.css'
export const Button = ({ txt, ...rest }) => {
    return <button className='button-style' {...rest}>{txt}</button>
}