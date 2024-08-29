import { AppBar,Button,Box,Toolbar, IconButton,Typography } from "@mui/material";
import { icons } from "../Assets/Icons";
import Image from 'next/image';
import ControlledSwitch from "./switchMode";
import { ThemeModeContext } from "./themeModeContext.";
import { useContext } from "react";
export default function NavBar(){
    const context=useContext(ThemeModeContext);
    if(!context){
        throw new Error('---');
    }
    const {theme}=context;
    return(
        <Box sx={{ display: 'flex'}}>
            <AppBar className={`w-[20%] min-h-screen fixed left-0 ${theme? 'bg-[#2c2c38]':'bg-[#ffffff]'}`}> 
                {theme ? <IconButton className="mt-5 pl-0 rounded-none"><Image src={icons.logoLight} alt="Logo"/></IconButton> 
                    : <IconButton className="mt-5 pl-0 rounded-none"><Image src={icons.logoDark} alt="Logo"/></IconButton>}
                
                <Toolbar 
                className="p-0 mt-12"
                sx={{
                    flexDirection:'column',
                    alignItems:'flex-start',
                    margin:'10% 0 0 0%',
                    }}>
                    <Typography className="ml-5 text-[13px] text-gray-500 mb-[13px]" >ALL BOARDS (0)</Typography>
                    <button className={`text-sm text-white w-full text-left h-12 pl-5 focus:bg-[#635fc7] focus:rounded-r-full ${theme? 'text-white':'text-gray-600 focus:text-white'}`}>
                        <Image src={icons.iconBoard} alt="Board" width={20} height={20} className="inline-block mr-2" />
                        Platform Launch
                    </button>
                    <button className={`text-sm text-white w-full text-left focus:bg-[#635fc7] h-12 pl-5 focus:rounded-r-full ${theme? 'text-white':'text-gray-600 focus:text-white'}`}>
                        <Image src={icons.iconBoard} alt="Board" width={20} height={20} className="inline-block mr-2" />
                        Marketing Plan
                    </button>
                    <button className={`text-sm text-white w-full text-left focus:bg-[#635fc7] h-12 pl-5 focus:rounded-r-full ${theme? 'text-white':'text-gray-600 focus:text-white'}`}>
                        <Image src={icons.iconBoard} alt="Board" width={20} height={20} className="inline-block mr-2" />
                        Roadmap
                    </button>
                    <button className="text-sm text-[#645fc6] w-full text-left h-12 pl-5 ">
                        <Image src={icons.iconBoard} alt="Board" width={20} height={20} className="inline-block mr-2" />
                        + Create New Board
                    </button>
                </Toolbar>
                    <ControlledSwitch/>
                <IconButton className="flex w-[250px] h-[20px] mt-[15px] rounded-none">
                    <Image src={icons.iconHideSideBar} alt="hideShowbar" width={20} />
                    <Typography className="ml-[15px]"> Hide Sidebar</Typography>
                </IconButton>
            </AppBar>

            
        </Box>
    )
}