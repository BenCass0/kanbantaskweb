import React, { useContext } from 'react';
import { Switch,Box } from '@mui/material';
import Image from 'next/image';
import { icons } from '../Assets/Icons';
import { ThemeModeContext} from './themeModeContext.';

export default function ControlledSwitch(){
    const [checked,setChecked]=React.useState(false);

    const context=useContext(ThemeModeContext);
    if(!context){
        throw new Error('---');
    }
    const {theme,setTheme}=context;
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const newChecked=event.target.checked;
        setChecked(newChecked)
        setTheme(newChecked ? 1 : 0);
    };

    return (
        <div className='pt-[220px] pl-[20px]'>
        <Box className={`w-[220px] h-14 flex  p-4 rounded-xl ${theme? 'bg-[#23232F]' : 'bg-[#f4f7fd]'}`}>
            <Image src={icons.iconLightTheme} alt="Light theme" width={22} className="mr-8 ml-5"/>
            <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{'aria-label':'controlled'}}
            size='small'
            />
            <Image src={icons.iconDarkTheme} alt="Dark theme" width={20} height={20} className="ml-8"/>
        </Box>
        </div>
    );
}