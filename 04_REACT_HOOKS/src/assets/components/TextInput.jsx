import { useState } from "react";
//TextInput 组件，用于获取用户的文本输入
const TextInput = () => {
  //使用useState Hook 来存储输入框的值
  //inputValue 变量保存当前的输入值，setInputValue函数用于更新这个值
    const [inputValue,setInputVlaue] =useState("")
    //handleChange 函数会在输入框的值发生变化时被调用
    //它接收一个事件对象e作为参数，并使用e.target.value获取输入框的新值，然后调用 setInputValue函数更新inputValue状态
    const handleChange= (e) =>{
        setInputVlaue(e.target.value);
    }
    //渲染组件，包括一个输入框和一个段落
    //输入框的value 属性绑定到 inputValue 状态，这样输入框就会显示最新的输入值，onChange事件处理函数设置为handleChange,以便在输入时更新状态
    //段落元素显示当前的输入值
    return (
          <div>
            <input type="text" 
            value={inputValue} //将输入框的值绑定到inputValue状态
            onChange={handleChange} //设置输入框的onChange事件处理函数
            />
            {/*显示当前的输入值 */}
             <p>你输入了：{inputValue}</p>
          </div>
    );
}
export default TextInput

