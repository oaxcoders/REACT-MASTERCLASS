import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
///
const Father = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    transform:rotate(360deg);
    border-radius:100px
  }
  100% {
    transform:rotate(0deg);
    border-radius:0px;
  }
`;
const Emoji = styled.span`
  font-size: 36px;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    font-size: 36px;
    &:hover {
      font-size: 50px;
    }
  }
`;
// const Text = styled.h1`
//   color: white;
// `;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
  height: 30px;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father>
      <Title>Hello</Title>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log in
      </Btn>
      <Input required />
      <Input required />
      <Input required />
      <Input required />

      <Box bgColor="tomato">
        <Emoji>꺄아악</Emoji>
      </Box>
    </Father>
  );
}

export default App;
