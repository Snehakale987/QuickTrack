const yesButton = document.getElementById("RB1");
const divDatePicker = document.getElementById("datepicker-div");
const noButton = document.getElementById("RB2");
const activityForm = document.getElementById("activity-form");
const dashboard = document.getElementById("dashboard");
const reports = document.getElementById("reports");
const activityNameBox =document.getElementById("activity-name");
const startTimeBox =document.getElementById("start-datepicker");
const endTimeBox = document.getElementById("end-datepicker");
const form = document.getElementById("new-activity-form");
const pastactivityList = document.getElementById('past-activity-list');

yesButton.addEventListener("change",()=>{
divDatePicker.style.display = "flex";
})

noButton.addEventListener("change",()=>{
  divDatePicker.style.display = "none";
})

window.changeTab=(button)=>{
 if(button==='activity'){
   activityForm.style.display ="block";
   dashboard.style.display ="none";
   reports.style.display ="none";

 } else if(button==='dashboard'){
  activityForm.style.display ="none";
  dashboard.style.display ="block";
  reports.style.display ="none";
 } else{
  activityForm.style.display ="none";
  dashboard.style.display ="none";
  reports.style.display ="block";
 }
}

window.addActivity=()=>{
  let activities = JSON.parse(localStorage.getItem("activities")) || [];
let activityName = activityNameBox.value;
let startTime = startTimeBox.value;
let endTime = endTimeBox.value;
let activityDetails = {
  id:Date.now(),
  name: activityName,
  startTime: startTime,
  endTime: endTime,
  totalTime: moment(endTime, "YYYY/MM/DDTHH:mm").valueOf() - moment(startTime, "YYYY/MM/DDTHH:mm")
}
activities.push(activityDetails);
localStorage.setItem("activities",JSON.stringify(activities));
renderActivities()
changeTab('dashboard');
}

form.addEventListener("submit",(event)=>{
event.preventDefault();
})

function renderActivities() {
      
  const activities = JSON.parse(localStorage.getItem('activities'));

    pastactivityList.innerHTML = '';

    activities.forEach(activity => {
     
        const activityItem = document.createElement('div');
        activityItem.id=activity.id+'div'
        activityItem.classList.add('activity-item');

  
        activityItem.innerHTML = `
        <span>${activity.name}</span>
        <span>Start Time : ${activity.startTime.split("T").join(" ")}</span>
        <span>End Time : ${activity.endTime.split("T").join(" ")}</span>
        <p id=${activity.id}-past-timer>${formatTime(activity.totalTime)}</p>
        <button onclick="deleteActivity(${activity.id})">Delete</button>
    `;
          pastactivityList.appendChild(activityItem)

    });
}

window.formatTime = (ms) => {
  // Calculate hours, minutes, and seconds
const duration = moment.duration(ms);
const hours = String(Math.floor(duration.asHours())).padStart(2, '0');
const minutes = String(duration.minutes()).padStart(2, '0');
const seconds = String(duration.seconds()).padStart(2, '0');
return `${hours}:${minutes}:${seconds}`;
}

window.deleteActivity = (id) => {
  let activities = JSON.parse(localStorage.getItem('activities')) || [];
  activities = activities.filter(activity => activity.id !== id);
  localStorage.setItem('activities', JSON.stringify(activities));
  renderActivities();
};
renderActivities();
  changeTab('activity');











