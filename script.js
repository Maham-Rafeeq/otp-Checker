let myotp =document.getElementById("inp");
function verifyotp(){
 return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(Number(myotp.value) ===""){
      reject("Plz first enter you otp");
      
      }
      else if(Number(myotp.value) === 1234){
        resolve("congratulations you are the admin");
        
      }
      else{
        reject("invalid user otp");
        
      }
    },1000)
 })
};
function btn(){
verifyotp()
.then(msg => alert(msg))
.catch(error => alert(error))
}
