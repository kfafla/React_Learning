import RegistForm from "./RegistForm";
import { useState } from "react";

const RegistPage = () => {
 const [formData, setFormData] = useState(null);

 const handleFormSubmit = (data) => {
   setFormData(data);
 };

 return (
   <div>
     <div>用户注册</div>
     <RegistForm onSubmit={handleFormSubmit} />
     {formData && (
       <div>
         <div>提交数据：</div>
         <p>Name：{formData.name}</p>
         <p>Email：{formData.email}</p>
       </div>
     )}
   </div>
 );
}

export default RegistPage