import { createContext, useContext, useState } from "react"

const ToggleContextz = createContext()

function ToggleProvider({children}) {
 const [isOpen,setIsOpen]=useState(false)
 const handleToggle =function(){
  setIsOpen(!isOpen)
 }
 return (
   <ToggleContextz.Provider value={{ isOpen, setIsOpen, handleToggle }}>
     {children}
   </ToggleContextz.Provider>
 );
}

function useToggle(){
 const context = useContext(ToggleContextz)
 return context;
}

export {ToggleProvider,useToggle}
