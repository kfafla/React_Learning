import React from "react";
import { useState } from "react";

const ThemeToggle = () => {
    //isDarkMode为true表示暗黑模式
    const [isDarkMode,setIsDarkMode] = useState(false)
    const toogleTheme = () => {
        setIsDarkMode((mode) => ! mode);
    };
    return (
       <div style={{height:"100vh",background : isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
       }}> 
   <h2>
     aslkdglakngladjlakgjladskngkgjaldsgjldsknaglkdkaldjgladskdddd
   </h2>
   <button onClick={toogleTheme}>切换到 {isDarkMode ? "白天" : "暗黑" }模式</button>
       </div>
    )
}
export default ThemeToggle