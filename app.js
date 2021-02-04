var bill=document.querySelector(".bill")
var amount=document.querySelector(".amount")
var btn=document.querySelector(".btn")
var output=document.querySelector(".output")

btn.addEventListener("click",()=>{
  var notes=[2000,500,200,100,20,10,1];
  var returnNotes=[];
  var ans="";
    var billAmount=parseInt(bill.value);
    var cashAmount=parseInt(amount.value);
    if(cashAmount>=billAmount){
      var returnAmount=cashAmount-billAmount;
      for(let i=0;i<notes.length;i++){
      returnNotes[i]=Math.floor(returnAmount/notes[i]);
      returnAmount=returnAmount-notes[i]*returnNotes[i];
      let str= notes[i]+"="+ returnNotes[i]  ;
       ans= ans + String(str) + ",\n\n" ;
    
    }
   output.innerHTML=ans;
  }else{
    output.innerHTML = "You require more money to pay";
  }
}
)

