import React from 'react'
import { useState,useEffect } from 'react'
export default function PageTitle() {
    const [count ,setCount] = useState(0)
    useEffect( () => {
        document.title = `你点了${count}次`
    },[count])
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>点击</button>
    </div>
  )
}
