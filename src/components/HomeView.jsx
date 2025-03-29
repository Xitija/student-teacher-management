import ns1 from '../images/ns1.png';
import ns2 from '../images/ns2.jpg';

const HomeView = () => {
  return (
    <div className="flex object-cover w-full flex-col md:flex-row">
      <img className="w-full md:w-1/2" src={ns1} alt="NS1" />
      <img className="w-full md:w-1/2" src={ns2} alt="NS2" />
    </div>
  );
};

export default HomeView;
