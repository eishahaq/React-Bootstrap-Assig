import {Button} from 'react-bootstrap';
import "./style.css"


export const TestButton = ({buttonName}) => {
     return (
        <div className="TestButton">
        <Button variant="primary">{buttonName}</Button>{' '}
        </div>
     );
    }

export const PrimaryButton = () => {
    return (
        <div className= 'PrimaryButton'>
                <Button variant="primary">Primary</Button>{' '}
        </div>
    )
}