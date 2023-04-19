import styled from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';

// import { setRegion } from './controls-slice';
// import {selectRegion} from './controls-slice';
import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import { useRegion } from './use-region';

const optionsMap = {
  'Africa': { value: 'Africa', label: 'Africa' },
  'America': { value: 'America', label: 'America' },
  'Asia': { value: 'Asia', label: 'Asia' },
  'Europe': { value: 'Europe', label: 'Europe' },
  'Oceania': { value: 'Oceania', label: 'Oceania' },
}
const options = Object.values(optionsMap);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = () => {
  const [region, handleSelect] = useRegion();
  // const dispatch = useDispatch();
  // const region =useSelector(selectRegion);

  // const handleSelect = (reg) => {
  //   dispatch(setRegion(reg?.value || ''))
  // }
  return (
    <Wrapper>
      <Search />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        // value={optionsMap[region]}
        value={region !== '' && optionsMap[region]}
        onChange={handleSelect}
      />
    </Wrapper>
  );
};
