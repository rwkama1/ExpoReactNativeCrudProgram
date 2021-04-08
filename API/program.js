
 class ProgramAPI 
 {
    static instancia;
    url ="https://apin-extjs-radiotrasmitter.vercel.app/api/program/program";
    constructor() { }
    static getInstance() {
           if (!ProgramAPI.instancia) {
            ProgramAPI.instancia = new ProgramAPI();
           }
   
           return ProgramAPI.instancia;
       }
    addProgram=async (name,producer,type,price)=>
    {
       var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "name":name,
        "producer":producer,
        "type": type,
        "price":price});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

       const response=await  fetch(this.url, requestOptions)
      if(!response.ok)
      {
      const error=await response.text();
      return error;
      }
      return "Success";
     
    }
    getPrograms=async()=>
    {
       try {
         var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
         const response =await fetch(this.url, requestOptions);
         const result=await response.json();
         return result;
       } catch (error) {
          return error;
       }
    
    }
    getProgram=async(name)=>
    {
       const url2="https://apin-extjs-radiotrasmitter.vercel.app/api/program/getprogram?pname="+name;
       try {
         var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
         const response =await fetch(url2, requestOptions);
         const result=await response.json();
         return result;
       } catch (error) {
          return error;
       }
    
    }
    deleteProgram=async (name)=>
    {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({"name":name});
      
      var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

       const response=await  fetch(this.url, requestOptions)
      if(!response.ok)
      {
      const error=await response.text();
      return error;
      }
      return "Success";
     
    }
    updateProgram=async (name,producer,type,price)=>
    {

      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"name":name,"producer":producer,"type":type,"price":price});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
       const response=await  fetch(this.url, requestOptions)
      if(!response.ok)
      {
      const error=await response.text();
      return error;
      }
      return "Success";
     
    }
  

 }
 export default ProgramAPI