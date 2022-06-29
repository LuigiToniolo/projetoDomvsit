import React from 'react';
import { useState } from 'react';
import Select from 'react-select'

const I18N_STORE_KEY = 'i18nextLng';
const options = [
    { value: 'pt-BR', label: 'Português/BR' },
    { value: 'pt-PT', label: 'Português/PT' },
    { value: 'en-US', label: 'English' },
    { value: 'es-ES', label: 'Español' },
  ]
const labelInicial = options.filter((option) => {
    return option.value === localStorage.getItem(I18N_STORE_KEY)
    })[0].label
    
function MultiLanguage() {
  const [language] = useState(localStorage.getItem(I18N_STORE_KEY));
  const [label, setLabel] = useState(labelInicial);
  const [open, setOpen] = useState(false);
  const handleSelectChance = (event) => {
    console.log(event.label);
    setLabel(event.label);
    localStorage.setItem(I18N_STORE_KEY, event.value);
    console.log(event.value);
    document.location.reload(true);
  };

  const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'transparent', marginLeft: '4%', width:'70%', cursor: 'pointer',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: '#D7DBEB',
        textAlign:'left',
        backgroundColor: '#222a49',
        width:'auto',
        cursor: 'pointer',

        ':hover': {
          ...styles[':hover'],
          backgroundColor: '#353C58',
          color: '#D7DBEB'

        }
      };
    },
    menu: (styles) => ({ ...styles, backgroundColor: '#222a49', borderRadius:'4px', width:'auto',  marginLeft: '4%',}),
    menuList: (styles) => ({ ...styles, backgroundColor: '#222a49', borderRadius:'4px', width:'127%'
  
  }),
    indicatorSeparator: (styles) => ({ ...styles, display: 'none'}),
    placeholder: (styles) => ({ ...styles, color: '#ffffff', ':hover': {color: '#9BA4CE'}}),
    container: (styles) => ({ ...styles, width:'125%', borderRadius:'4px'}),
  };

  return (
    <>

      <div className='select-language' style={open ? { height: '200px' } : { height: '40px' }}>
        <Select
          styles={colourStyles}
          closeMenuOnSelect={true}
          onMenuClose={() => setOpen(!open)}
          onMenuOpen={() => setOpen(!open)}
          onChange={handleSelectChance}
          className='select'
          options={options}
          value={language}
          placeholder={label}
          isSearchable={false} />

      </div>
    </>
  );
}
export default MultiLanguage;
