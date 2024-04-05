import { useState } from "react";
import Select, { components } from 'react-select';
import filters from '../assets/filter.png';

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#FFFFFF' : '#FFFFFF',
      color:state.isSelected ? 'black' : 'black',
   
    }),
    control: (provided, state) => ({
      ...provided,
      boxShadow: 'none',
      color: 'black',
      border: '1px solid black',
      boxShadow: 'none'
    })
   }



const DropdownIndicator = (props) => {
 return (
    <components.DropdownIndicator {...props}>
      <img className="icon-small" src={filters} alt="filter icon" />
    </components.DropdownIndicator>
 );
};

function Search({onSelectedOptionChange}) {
 const [selectedOption, setSelectedOption] = useState(null);
 const [options, setOptions] = useState([
    { value: 'Student', label: 'Student' },
    { value: 'Employment', label: 'Employment' },
    { value: 'Others', label: 'Others' },
 ]);

 const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    onSelectedOptionChange(selectedOption);
 };

 return (
    <div className="select" >
           <Select options={options} value={selectedOption} 
           onChange={handleChange}
           components={{ DropdownIndicator }}
           styles={customStyles}
           placeholder="I'll fly to Germany as.."
           />
       </div>
 );
}

export default Search;
