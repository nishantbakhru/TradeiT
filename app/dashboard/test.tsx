// import React, { useState } from 'react';

// const InputExample: React.FC = () => {
//   const [inputValue, setInputValue] = useState<string>('');

//   // Event handler function
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     // Access the value of the input element
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="inputField">Enter text: </label>
//       <input
//         id="inputField"
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//       />
//       <p>You entered: {inputValue}</p>
//     </div>
//   );
// };

// export default InputExample;

import React, { useState } from 'react';

const InputExample: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  // Event handler function
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Ensure event.target is an HTMLInputElement
    const target = event.target as HTMLInputElement;
    setInputValue(target.value);
  };

  return (
    <div>
      <label htmlFor="inputField">Enter text: </label>
      <input
        id="inputField"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>You entered: {inputValue}</p>
    </div>
  );
};

export default InputExample;