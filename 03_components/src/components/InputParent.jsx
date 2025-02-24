import Input from "./Input"
import { useState } from "react"
const InputParent = () => {
   const [inputValue,setInputValue] = useState("");
   const handleInputChange = ( newValue) =>{
    //更新组件的状态
    setInputValue(newValue);
   };
   return (
     <>
       <Input onInputChange={handleInputChange} />
       <h2>输入的值是：{inputValue}</h2>
     </>
   );
}
export default InputParent