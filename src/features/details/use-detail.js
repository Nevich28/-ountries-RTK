import { loadCountryByName, clearDetails, selectDetails} from './details-slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
export const useDetails = (name) => {
    const dispatch = useDispatch();
    const details = useSelector(selectDetails)
    useEffect(() => {
        dispatch(loadCountryByName(name));
    
        return () => {
          dispatch(clearDetails());
        }
      }, [name, dispatch]);

      return details;
}