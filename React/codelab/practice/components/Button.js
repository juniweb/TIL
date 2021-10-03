import styled from 'styled-components';

const ButtonComp = (props) => {
    const Button = styled.button`
        /* Adapt the colors based on primary prop */
        background: ${props => props.primary ? "palevioletred" : "white"};
        color: ${props => props.primary ? "white" : "palevioletred"};

        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
            transform: scale(1.1);
        }
        &:active {
            transform: scale(0.9);
        }
        &:nth-child(3) {
            background: black;
            color: white;
            border: 2px solid black;
        }        
        `;

        return (
            <Button primary={props.primary}>{props.btnName}</Button>
        )        
}

export default ButtonComp;