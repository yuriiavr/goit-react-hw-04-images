import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration={1.5}
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loader;