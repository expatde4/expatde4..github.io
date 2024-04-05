import { useState } from 'react';
import './App.css';
import Search from './search/Search';
import TextInputForm from './form/TextInputForm'

function App() {
 // Step 1: Declare state for selected option
 const [selectedOption, setSelectedOption] = useState('');

 // Step 2: Handle selected option change
 const handleSelectedOptionChange = (option) => {
    setSelectedOption(option);
 };

 return (
    <>
  
      <div>
        <h1 style={{ color: 'black' }}>What is the purpose of your visit to Germany? 🇩🇪 </h1>
        <div className='search'>
          <Search onSelectedOptionChange={handleSelectedOptionChange} />
        </div>
      </div>

      <div>
      <TextInputForm />
    </div>
    </>
 );
}

export default App;
