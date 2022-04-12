import PuffLoader from 'react-spinners/PuffLoader';
import './sass/loader.scss';

function Loader({ loading }) {
  return (
    <div className="loader">
      <PuffLoader loading={loading} color={'#801B28'} size={40} />
    </div>
  );
}
export default Loader;
