import { Button, Gap } from '../../atom'
import './index.css';

export const Card = ({ title, create, body, onDelete, onArsip, value, txt }) => {

    return (
        <div className="card-container">
            <div className="header-card">
                <div>
                    <p className="title-card">{title}</p>
                    <span className="card-createaAt">{create}</span>
                </div>
            </div>
            <Gap height={"20px"}/>
            <p className="card-desc">{body}</p>
            <Gap height={"12px"}/>
            <div className='card-button-container'>
                <Button txt="Delete" style={{width: '100%', backgroundColor: '#ef4444'}} onClick={onDelete} value={value} />
                <Gap width={"20px"} />
                <Button txt={txt} style={{width: '100%'}} onClick={onArsip} value={value} />
            </div>
        </div>
    )
}