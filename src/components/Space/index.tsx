import { Wrapper } from './styled';

interface SpaceType {
  height?: number;
  width?: number;
}

const Space = ({ height, width }: SpaceType) => {
  return <Wrapper height={height} width={width}></Wrapper>;
};

export default Space;
