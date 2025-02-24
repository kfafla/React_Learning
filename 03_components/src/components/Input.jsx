const Input = ({onInputChange}) => {
      return (
        <input 
        type="text" 
        //将输入的值传回给父组件
        onChange={(e)=> onInputChange(e.target.value)}
        placeholder="请输入....."
        />
      )
}
export default Input;