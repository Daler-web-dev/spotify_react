import React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

const Settings = () => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    }
    return ( 
        <div className="w-full bg-[#121212] p-[20px] w-[90%]">
            <div className="w-[100%] flex justify-between mb-[30px]">
                <p className='text-white text-[26px] font-bold'>Настройки</p>
                <div className="w-[40px] h-[40px] bg-[#121212] rounded-[100%] flex justify-center items-center ease-in hover:bg-[#ffffff20]">
                <span className="material-symbols-outlined invert-[60%] text-[30px] cursor-pointer hover:invert-[100%]">search</span>
                </div>
            </div>
            <div className="flex flex-col gap-[25px]">
            <div className="w-[100%] flex justify-between items-end">
                <div className="flex flex-col gap-[15px]">
                    <p className='text-white text-[23px] font-bold'>Язык</p>
                    <p className="text-[#ffffff90] text-[14.5px]">Выбери язык. Изменения вступят в силу после перезапуска приложения</p>
                </div>
                <div>
      <FormControl sx={{ width: 300, height: '40px', backgroundColor: "#333333", borderRadius: "5px" }}>
        <Select
        sx={{color: '#ffffff90', width: 300, height: '40px', fontSize: "14px", fontStyle: "normal", backgroundColor: "#333333"}}
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Русский</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="" >
            <em>Русский</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem sx={{height: '40px', color: '#ffffff90', backgroundColor: "#333333",}}
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
            </div>
            <div className="w-[100%] flex justify-between items-end">
                <div className="flex flex-col gap-[15px]">
                    <p className='text-white text-[23px] font-bold'>Контент для взрослых (Explicit)</p>
                    <p className="text-[#ffffff90] text-[14.5px]">Разрешить контент с пометкой Explicit</p>
                </div>
                <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}/>
            </div>
            <div className="w-[100%] flex justify-between items-end">
                <div className="flex flex-col gap-[15px]">
                    <p className='text-white text-[23px] font-bold'>Музыка нон-стоп</p>
                    <p className="text-[#ffffff90] text-[14.5px]">Никаких перерывов. Включать похожий контент, когда мое аудио закончится.</p>
                </div>
                <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}/>
            </div>
            <div className="w-[100%] flex justify-between items-end">
                <div className="flex flex-col gap-[15px]">
                    <p className='text-white text-[23px] font-bold'>Язык</p>
                    <p className="text-[#ffffff90] text-[14.5px]">Выбери язык. Изменения вступят в силу после перезапуска приложения</p>
                </div>
                <div>
      <FormControl sx={{ width: 300, height: '40px', backgroundColor: "#333333", borderRadius: "5px" }}>
        <Select
        sx={{color: '#ffffff90', width: 300, height: '40px', fontSize: "14px", fontStyle: "normal", backgroundColor: "#333333"}}
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Русский</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="" >
            <em>Русский</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem sx={{height: '40px', color: '#ffffff90', backgroundColor: "#333333",}}
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: 300, height: '40px', backgroundColor: "#333333", borderRadius: "5px" }}>
        <Select
        sx={{color: '#ffffff90', width: 300, height: '40px', fontSize: "14px", fontStyle: "normal", backgroundColor: "#333333"}}
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Русский</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="" >
            <em>Русский</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem sx={{height: '40px', color: '#ffffff90', backgroundColor: "#333333",}}
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
            </div>
            </div>
        </div>
     );
}
 
export default Settings;