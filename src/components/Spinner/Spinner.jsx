import { ClipLoader } from 'react-spinners';

const findStyles = position => {
  if (!position) {
    return {};
  } else if (position === 'center') {
    return {
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    };
  }
};

export const Spinner = ({ size, position }) => {
  const styles = findStyles(position);
  return (
    <span style={styles}>
      <ClipLoader size={size} color="#36d7b7" />
    </span>
  );
};
