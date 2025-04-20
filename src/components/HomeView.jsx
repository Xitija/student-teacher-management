import { fetchHealth } from '../features/school/schoolSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import ns1 from '../images/ns1.png';
import ns2 from '../images/ns2.jpg';

const HomeView = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.school.status);
  const error = useSelector((state) => state.school.error);

  useEffect(() => {
    if (status === 'idle') {
      toast.promise(
        dispatch(fetchHealth()),
        {
          loading: 'Connecting to Server...',
          success: <b>Connected to server successfully!</b>,
          error: <b>Failed to connect</b>
        },
        {
          style: {
            background: '#9cc6be'
          }
        }
      );
    }
    if (error) {
      console.log('Error:', error);
    }
  }, [status, dispatch, error]);

  return (
    <div className="flex w-full flex-col md:flex-row">
      <img className="w-full md:w-1/2" src={ns1} alt="NS1" />
      <img className="w-full md:w-1/2" src={ns2} alt="NS2" />
    </div>
  );
};

export default HomeView;
