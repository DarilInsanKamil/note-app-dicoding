import './index.css'
export const Badge = ({ title, img, ...rest }) => {
    return (
        <button className='container-badge' {...rest}>
            <p>{title}</p><img src={img} alt='icon' className='badge-icon'/>
        </button>
    )
}