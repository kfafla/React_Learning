import { useState } from "react"
const RegistForm = ({ onSubmit }) =>{
   const [name, setName] = useState("")
   const [email, setEmail] =useState("")

   const handleSubmit = (e) => {
       e.preventDefault();
       onSubmit({ name, email });
   }
   return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>姓名：</label>
        <input
          type="text"
          value={ name }
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>邮箱：</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">提交</button>
    </form>
  );
}
export default RegistForm