import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../components/Button';
import { CountryDetails } from '../features/details/CountryDetails';


export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const {currentCountry, error, status} = useSelector(selectDetails)

  // useEffect(() => {
  //   dispatch(loadCountryByName(name));

  //   return () => {
  //     dispatch(clearDetails());
  //   }
  // }, [name, dispatch]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      <CountryDetails name={name} navigate={navigate}/>
    </div>
  );
};
