import styled from 'styled-components';
import Star from '../../assets/icons/Star.svg';

type RatePropType = {
  stars: number;
};

const Rate = ({ stars }: RatePropType) => {
  return (
    <Div>
      {[1, 2, 3, 4, 5].map((star) => {
        if (stars >= star) {
          return (
            <img
              width="40%"
              key={Math.random() * 100}
              src={Star}
              alt="yes star"
            />
          );
        } else {
          return <img key={Math.random() * 100} src="" alt="np star" />;
        }
      })}
    </Div>
  );
};

const Div = styled.div`
  display: flex;
`;

export default Rate;
