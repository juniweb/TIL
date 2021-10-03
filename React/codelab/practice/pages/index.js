import styled from 'styled-components';
import Button from '../components/Button';

const IndexPage = () => {
    // Create a Title component that'll render an <h1> tag with some styles
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `;
    
    // Create a Wrapper component that'll render a <section> tag with some styles
    const Wrapper = styled.section`
      padding: 4em;
      background: papayawhip;
    `;

    // const Button = styled.button`
    //     /* Adapt the colors based on primary prop */
    //     background: ${props => props.primary ? "palevioletred" : "white"};
    //     color: ${props => props.primary ? "white" : "palevioletred"};

    //     font-size: 1em;
    //     margin: 1em;
    //     padding: 0.25em 1em;
    //     border: 2px solid palevioletred;
    //     border-radius: 3px;
    //     cursor: pointer;
    //     &:hover {
    //         transform: scale(1.1);
    //     }
    //     &:active {
    //         transform: scale(0.9);
    //     }
    //     &:nth-child(3) {
    //         background: black;
    //         color: white;
    //         border: 2px solid black;
    //     }        
    //     `;
    
    // Use Title and Wrapper like any other React component – except they're styled!    
    return (
        <Wrapper>
            <Title>
                Hello World!
            </Title>
            <div>
                {/* <Button>Normal</Button>
                <Button primary>Primary</Button>
                <Button>third2</Button> */}
                <Button btnName='Normal2' />
                <Button btnName='Primary2' primary={true} />
                <Button btnName='third2' />
            </div>
        </Wrapper>
    )
}

export default IndexPage;