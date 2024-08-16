const ReqUrl = async(API_URL='',ObjectMethod,errmsg=null) => {
    try{
      
      await fetch(API_URL,ObjectMethod)
            
      }
    catch(err){
       errmsg=err.Message;
      }
      finally{
          return errmsg
      }
      
    }
  

export default ReqUrl
