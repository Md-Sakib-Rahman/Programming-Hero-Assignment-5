

const coinCounter = document.getElementById("coin-counter");
const callBtns = document.querySelectorAll(".callbtn");
const callHistoryDexstop =document.getElementById("callHistory")
const callHistoryMobile =document.getElementById("callHistoryMobile")
let coins = 100;
coinCounter.innerText = coins;
function updateHistoryDesktop(whichcall){
    let serviceName;
    let serviceNumber;
    let now= new Date();
    let hour = now.getHours() % 12 || 12;
    hour = hour.toString().padStart(2, "0");
    let minute = now.getMinutes().toString().padStart(2, "0");
    let second = now.getSeconds().toString().padStart(2, "0");
    let amPm = now.getHours() >= 12 ? "PM" : "AM";

            if (whichcall == "NationalEmergencyNumber") {
                serviceName="National Emergency Number";
                serviceNumber="999";
            }
            else if(whichcall == "PoliceEmergency"){
                serviceName="Police Helpline Number";
                serviceNumber="999";
            }
            else if(whichcall == "FireEmergency"){
                serviceName="Fire Service Number";
                serviceNumber="999";
            }
            else if(whichcall == "AmbulanceEmergency"){
                serviceName="Ambulance Service";
                serviceNumber="1994-999999";
            }
            else if(whichcall == "WomenAndChildEmergency"){
                serviceName="Women & Child Helpline";
                serviceNumber="102";
            }
            else if(whichcall == "CurruptionEmergency"){
                serviceName="Anti-Corruption Helpline";
                serviceNumber="106";
            }
            else if(whichcall == "ElectricityEmergency"){
                serviceName="Electricity Helpline";
                serviceNumber="16216";
            }
            else if(whichcall == "BracEmergency"){
                serviceName="Brac Helpline";
                serviceNumber="16445";
            }
            else if(whichcall == "RailwayEmergency"){
                serviceName="Bangladesh Railway Helpline";
                serviceNumber="163";
            } 
    let div = document.createElement("div");
    div.classList.add("bg-gray-200", "flex", "justify-between", "items-center", "p-3", "mt-4", "rounded-lg")
    div.innerHTML=`
        <div>
            <h2 class="font-bold text-sm">${serviceName}</h2>
            <h4>${serviceNumber}</h4>
        </div>
        <div>
            <h2>${hour+":"+minute+":"+second+" "+amPm}</h2>
        </div>
    `
    callHistoryDexstop.appendChild(div)
    callHistoryMobile.appendChild(div.cloneNode(true));
}
function updateCoinCounter() {
    coins -= 20;
    coinCounter.textContent = "";
    coinCounter.textContent = coins;

}

callBtns.forEach(callBtn => {
    callBtn.addEventListener('click', (e) => {
        let id = e.currentTarget.id;
        if (coins < 20) {
            alert("You dont have enough Coin ! ")
        } else {
            if (id == "NationalEmergencyNumber") {
                updateHistoryDesktop(id)
                updateCoinCounter()
                alert("calling National Emergency Number 999")
            }
            else if(id == "PoliceEmergency"){
                updateHistoryDesktop(id)
                updateCoinCounter()
                alert("calling Police Helpline Number 999")
            }
            else if(id == "FireEmergency"){
                updateHistoryDesktop(id)
                updateCoinCounter()
                alert("calling Fire Service Number 999")
            }
            else if(id == "AmbulanceEmergency"){
                updateHistoryDesktop(id)
                updateCoinCounter()
                alert("calling Ambulance Service 1994-999999")
            }
            else if(id == "WomenAndChildEmergency"){
                updateHistoryDesktop(id)
                updateCoinCounter()
                alert("calling Women & Child Helpline 102")
            }
            else if(id == "CurruptionEmergency"){
                updateHistoryDesktop(id)
                updateCoinCounter()
                alert("calling Anti-Corruption Helpline 106")
            }
            else if(id == "ElectricityEmergency"){
                updateHistoryDesktop(id)
                updateCoinCounter()
                alert("calling Electricity Helpline 16216")
            }
            else if(id == "BracEmergency"){
                updateHistoryDesktop(id)
                updateCoinCounter()
                alert("calling Brac Helpline 16445")
            }
            else if(id == "RailwayEmergency"){
                updateHistoryDesktop(id)
                updateCoinCounter()
                alert("calling Bangladesh Railway Helpline 163")
            }
        }
    })
})