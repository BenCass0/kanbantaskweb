import React, {createContext,ReactNode,useState} from 'react';

//Especificar el tipo de elemento que se espera recibir en la funcion
interface ThemeModeContextType{
    theme:number;
    setTheme:(theme: number)=>void;
}

interface ThemeModeProviderProps{
    children: ReactNode;
}

const ThemeModeContext=createContext<ThemeModeContextType| undefined>(undefined);

const ThemeModeProvider:React.FC<ThemeModeProviderProps>=({children})=>{
    const [theme, setTheme]= useState<number>(0);
    return(
        <ThemeModeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeModeContext.Provider>
    )
}

export {ThemeModeContext,ThemeModeProvider};