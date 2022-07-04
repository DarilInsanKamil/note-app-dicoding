import './index.css'

export const Input = ({ limit, ...rest }) => {
    return (
        <div className='input-container'>
            <input className="input-style" {...rest} />
            <div>{limit}</div>
        </div>
    )
}