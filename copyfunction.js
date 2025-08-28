const copybtns=document.querySelectorAll(".copybtn")
const copyCounterEl = document.getElementById("copyCounter")
let copyCounter=0;
copyCounterEl.textContent=copyCounter;

function updateCopyCounter(){
    copyCounter+=1;
    copyCounterEl.textContent=copyCounter;
}
const numbers = {
  NationalEmergencyNumberCopy: "999",
  PoliceEmergencyCopy: "999",
  FireEmergencyCopy: "999",
  AmbulanceEmergencyCopy: "1994-999999",
  WomenAndChildEmergencyCopy: "102",
  CurruptionEmergencyCopy: "106",
  ElectricityEmergencyCopy: "16216",
  BracEmergencyCopy: "16445",
  RailwayEmergencyCopy: "163"
};

async function copyToClipboard(whichCopy) {
  try {
    updateCopyCounter();
    const text = numbers[whichCopy];
    if (!text) return alert("No number found!");

    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Modern way
      await navigator.clipboard.writeText(text);
    } else {
      // Fallback for mobile browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed"; // prevent scrolling
      textarea.style.opacity = "0"; // invisible
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy"); // legacy method
      document.body.removeChild(textarea);
    }

    alert(`Copied: ${text}`);
  } catch (err) {
    alert("Copy failed: " + err);
  }
}

copybtns.forEach(copybtn => {
    copybtn.addEventListener('click', (e) => {
        let id = e.currentTarget.id;
        copyToClipboard(id)
        
    })
})