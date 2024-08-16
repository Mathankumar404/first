import  { useEffect } from 'react'
import  { useState } from 'react'
import ContentChild2 from './ContentChild2'
import AddItem from './AddItem'
import ReqUrl from './ReqUrl'

const ContentChild= () => {
  const [itemss, setItems] = useState([])
  const [newNo,setNo]=useState(itemss.length)
  const [addItem,setItem]=useState('')
  
  const API_URL="http://localhost:3500/items"
   useEffect(()=>{
          const FetchItems =async()=>{
          try{  
          const response = await fetch(API_URL);
          console.log(response)
          const listitem = await response.json()
          setItems(listitem)
       }catch(err){
        console.log(err.message)
       }
      
      }
     
      
        (async ()=>await FetchItems())()
        
        }, [] )
  const handleCheck = async (id) => {
    const listitem = itemss.map((item) => (item.id === id) ? {...item, checked: !item.checked } : item)   
      setItems(listitem)
      setNo(listitem.length)
    
    const myItem=(itemss.filter((item)=>item.id===id))
    console.log(myItem)
    const updateReqUrl= `${API_URL}/${id}`
    const postOption={
      method:"PATCH",
      headers:{
        "Content-Type":'Application/json'
      },
      body:JSON.stringify({checked:!(myItem[0].checked)})
     } 
    
    const result=await ReqUrl(updateReqUrl,postOption)
    console.log(result)
  }
  const handleChange=(e)=>{
        setItem(e)
  }
  const addItems=async(iteme)=>{
    
      if (iteme==='')
         {
        
         const newitem=[...itemss]
        setItems(newitem)
        setItem('')
       }
       else
       {
        const id=itemss.length?itemss[itemss.length-1].id+1:1;
        const b = {id,checked:true,item:iteme}
        console.log(b.id)
        const newitem =[...itemss,b]
        setItems(newitem)
        setNo(newitem.length)
        setItem('')
       
       const ObjectMethod={
        method:"POST",
        headers:{
          'Content-Type':'Application/json'
        },
        body:JSON.stringify(b)
      } 
      const result =await ReqUrl(API_URL,ObjectMethod)
      console.log(result)
      
      
    }
      }
  const handleDelete=(id)=>{
    const listItem=itemss.filter((item )=> (item.id===id) ? (!item.item): {item})
    setItems(listItem)
    setNo(listItem.length)
  }
  return (
    <main>
      
   <ContentChild2 itemss={itemss}  handleCheck={handleCheck} handleDelete={handleDelete}  newNo={newNo} />
   <AddItem addItem={addItem} handleChange={handleChange} addItems={addItems} key={itemss.id}/>
   </main>
  )
}

export default ContentChild
