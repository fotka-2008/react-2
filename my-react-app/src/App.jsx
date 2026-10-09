import React, {useState}from 'react'

const App = () => {

  const [data,setdata] = useState([{
}])

        const[openAdd,setOpenAdd] = useState(false)

        const handleSubmitAdd=(event)=>{
          event.preventDefault()
          const newUser={
            id:Date.now(),
            name:event.target.name.value,
            age:event.target.age.value,
            status:false
          }
          setData((prev)=>[...prev,newUser])
          setOpenAdd((prev)=>!prev)
        }
  return ( 
    <div>
      <button onClick={() =>setOpenAdd((prev)=>!prev)}></button>
    </div>


    
  )
}

export default App
