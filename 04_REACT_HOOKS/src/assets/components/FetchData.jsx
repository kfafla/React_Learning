import React from 'react'
import { useEffect,useState } from 'react'
const FetchData = () => {
    const [data,setData] =useState(null)
    const [error,setError] = useState(null)

    //使用useEffect Hook 调用API
    useEffect(() =>{
        //执行fetch请求，从API 获取数据，会在苏建加载完成后执行一次
        fetch("https://api.xygeng.cn/one")
        .then((response) => {
            if(!response.ok) {
                throw new Error("网络请求错误");
            }
            //将响应数据解析成json格式
            return response.json()
        })
        .then((json) =>{
            if(json.code === 200 && json.data) {
                setData(json.data)
            } else {
                setError(json.error || "获取数据失败!");
            }
        }) 
    },[]) //空依赖数组，表示这个 effect只在组件挂载时执行一次

    if(error) return <p>(error)</p>;
    if(!data) return <p>加载中..</p>;
    //数据成功加载，渲染数据
  return (
    <div>
      <p>来源:{data.origin}</p>
      <p>作者:{data.name}</p>
      <p>标签:{data.tag}</p>
      <p>内容:{data.content}</p>
    </div>
  );
}

export default FetchData
