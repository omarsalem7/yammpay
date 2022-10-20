import styled from 'styled-components';

type ButtonProptypes = {
  children: JSX.Element;
  color: string;
};
const Button = ({ children, color }: ButtonProptypes) => {
  return <MainButton color={color}>{children}</MainButton>;
};

const MainButton = styled.button`
  background-color: ${(props) => props.color};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0 15px;
  height: 45px;
  font-size: 15px;
  font-weight: bold;
`;
export default Button;
