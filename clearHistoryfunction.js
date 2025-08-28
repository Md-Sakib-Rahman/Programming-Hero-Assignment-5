const clearBtnDextop=document.getElementById("copybtnDextop")
const callHistoryDextopEl=document.getElementById("callHistory")
const clearBtnMobile=document.getElementById("copybtnMobile")
const callHistoryMobileEl=document.getElementById("callHistoryMobile")

clearBtnDextop.addEventListener('click', ()=>{
    callHistoryDextopEl.innerHTML="";
    callHistoryMobileEl.innerHTML="";
});
clearBtnMobile.addEventListener('click', ()=>{
    callHistoryDextopEl.innerHTML="";
    callHistoryMobileEl.innerHTML="";
});