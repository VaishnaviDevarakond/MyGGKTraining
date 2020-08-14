today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var id = 1;
// var events = [ 
//     {
//         'id' : id++,
//         'date' : new Date(2020,7,1),
//         'title' : "milestone stand up",
//         'from' : "8:00",
//         'to':"9:00",
//         'description': "standup"
//     }

// ];

var events = new Map();
events.set(id, 
     {
    'id' : id,
    'date' : new Date(2020,7,12),
    'title' : "milestone stand up",
    'from' : "08:00",
    'to':"09:00",
    'description': "standup",
    'attendees':["vaish", "sai"]
    }
)

events.set(++id, 
    {
   'id' : id,
   'date' : new Date(2020,7,13),
   'title' : "milestone stand up",
   'from' : "08:00",
   'to':"09:00",
   'description': "standup",
   'attendees':["vaish", "sai"]
   }
)

events.set(++id, 
    {
   'id' : id,
   'date' : new Date(2020,7,3),
   'title' : "milestone stand up",
   'from' : "08:00",
   'to':"09:00",
   'description': "standup",
   'attendees':["vaish", "sai"]
   }
)

events.set(++id, 
    {
   'id' : id,
   'date' : new Date(2020,7,4),
   'title' : "milestone stand up",
   'from' : "08:00",
   'to':"09:00",
   'description': "standup",
   'attendees':["vaish", "sai"]
   }
)

events.set(++id, 
    {
   'id' : id,
   'date' : new Date(2020,7,5),
   'title' : "milestone stand up",
   'from' : "08:00",
   'to':"09:00",
   'description': "standup",
   'attendees':["vaish", "sai"]
   }
)

events.set(++id, 
    {
   'id' : id,
   'date' : new Date(2020,7,6),
   'title' : "milestone stand up",
   'from' : "08:00",
   'to':"09:00",
   'description': "standup",
   'attendees':["vaish", "sai"]
   }
)

events.set(++id, 
    {
   'id' : id,
   'date' : new Date(2020,7,7),
   'title' : "milestone stand up",
   'from' : "08:00",
   'to':"09:00",
   'description': "standup",
   'attendees':["vaish", "sai"]
   }
)

events.set(++id, 
    {
   'id' : id,
   'date' : new Date(2020,7,7),
   'title' : "L&D Session",
   'from' : "10:00",
   'to':"11:00",
   'description': "standup",
   'attendees':["vaish", "sai"]
   }
)

events.set(++id, 
    {
   'id' : id,
   'date' : new Date(2020,7,7),
   'title' : "Team Meeting",
   'from' : "09:00",
   'to':"10:00",
   'description': "standup",
   'attendees':["vaish", "sai"]
   }
)

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    console.log(firstDay);
    tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;
    var displayEventPopUp  = function(filteredEvent,e){
        
        document.getElementById("myModal1").style.display = "block";
        let event = filteredEvent.find(obj => obj.id == e.target.id);
        console.log(event);
        document.getElementById("utitle").value = event.title;
        document.getElementById("udate").value = event.date;
        document.getElementById("ufrom").value =event.from;
        document.getElementById("uto").value = event.to;
        document.getElementById("udesc").value = event.description;
        let parentlist = document.getElementById("uatendeslist");
        parentlist.innerHTML = "";
        for(let i=0;i<event.attendees.length;i++){
            var li = document.createElement("li");
            li.className = "ist-group-item d-flex justify-content-between align-items-center";
            li.appendChild(document.createTextNode(event.attendees[i]));
            var span = document.createElement("SPAN");
            span.innerText = "\u00D7";
          //  var txt = document.createTextNode("\u00D7");
            span.className = "badge badge-primary badge-pill";
            span.id = "closelistitem";
            span.addEventListener('click',closeListItem.bind(this,parentlist));
           // span.appendChild(txt);
            li.appendChild(span);
            parentlist.appendChild(li);
        }
        document.getElementById("updatepopupsubmit").onclick = ()=>{

                let updatedEvent = {};
                updatedEvent.title = document.getElementById("utitle").value;
                updatedEvent.from = document.getElementById("ufrom").value;
                updatedEvent.to = document.getElementById("uto").value;
                updatedEvent.description = document.getElementById("udesc").value;
                updatedEvent.date = document.getElementById("date").value;
                updatedEvent.id = event.id;
                let childNodes = parentlist.childNodes;
                let attendees = [];
                for(let i=0; i< childNodes.length; i++){
                    let str = childNodes[i].innerText
                    if(str){
                    attendees.push(str.substring(0, str.length-2));
                    }
               }
        updatedEvent.attendees = attendees;
            if(!_.isEqual(updatedEvent, event)){
                events.set(event.id, updatedEvent);
                document.getElementById("myModal1").style.display = "none";
                showCalendar(currentMonth, currentYear);
            }
            else{
                alert("Edit required fields to update");
            document.getElementById("myModal1").style.display = "none";
            }
            }
            
        }
    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            //create + button for each cell
            var button = document.createElement("BUTTON");
            button.id = date;
          //  button.innerText = '+';
            button.appendChild(document.createTextNode("+"));
            button.className = "btn btn-outline-primary btn-sm";
            button.style = "float: right; padding: .2px; width: 20px; height: 22px;";
            //button.appendChild(node);
            button.addEventListener('click', openPopup);

            if (i === 0 && j < firstDay-1) {
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth(month, year)) {
                break;
            }

            else {
                cell = document.createElement("td");
                
                cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                cell.appendChild(button);
                var filteredEvent =Array.from(events.values()).filter(event => event.date.toString() == (new Date(year, month, date).toString()));
                console.log(filteredEvent);
                if(filteredEvent.length>1)
                filteredEvent.sort(function (a, b) {
                    return a.from.localeCompare(b.from);
                })
               console.log(filteredEvent)
                if(filteredEvent.length>0){
                    for(let i=0; i<filteredEvent.length;i++){
                    var label = document.createElement("SPAN"); 
                    label.className = "badge badge-pill badge-primary";
                    label.id = filteredEvent[i].id;
                    label.innerText = filteredEvent[i].title;
                   // label.style = ":hover"
                    label.addEventListener('click', displayEventPopUp.bind(this, filteredEvent));
                    cell.appendChild(label);
                    }
                }
   
                date++;
            }

        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}



function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

function openPopup(){
document.getElementById("myModal").style.display = "block";
document.getElementById("date").value = new Date(currentYear, currentMonth, this.id);
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    document.getElementById("myModal").style.display = "none";
  }
document.getElementById("popupsubmit").addEventListener('click', submitevent);
let parentlist =  document.getElementById("atendeslist");
document.getElementById("addattendees").addEventListener('click', addAttendees.bind(this,parentlist,"attend"));
document.getElementById("uaddattendees").addEventListener('click', addAttendees.bind(this,document.getElementById("uatendeslist"),"uattend"));

function submitevent(){
    let event={};
    let attendees = []; 
    let tempid = ++id;
    event.title = document.getElementById("title").value;
    event.from = document.getElementById("from").value;
    event.to = document.getElementById("to").value;
    event.description = document.getElementById("desc").value;
    event.date = document.getElementById("date").value;
    event.id = tempid;
    parentlist =  document.getElementById("atendeslist");
    let childNodes = parentlist.childNodes;
    for(let i=0; i< childNodes.length; i++){
        let str = childNodes[i].innerText
       if(str){
            attendees.push(str.substring(0, str.length-2));
       }
    }
    event.attendees = attendees;
    events.set(tempid,event);
    document.getElementById("myModal").style.display = "none";
    showCalendar(currentMonth, currentYear);
}


function addAttendees(parentlist,attend){
   var li = document.createElement("li");
   li.className = "ist-group-item d-flex justify-content-between align-items-center";
   li.appendChild(document.createTextNode(document.getElementById(attend).value));
   var span = document.createElement("SPAN");
   span.innerText = "\u00D7";
 //  var txt = document.createTextNode("\u00D7");
   span.className = "badge badge-primary badge-pill";
   span.id = "closelistitem";
   span.addEventListener('click',closeListItem.bind(this,parentlist));
  // span.appendChild(txt);
   li.appendChild(span);
   parentlist.appendChild(li);
}


   function closeListItem(parentlist,e) {
   // parentlist =  document.getElementById("atendeslist");
    parentlist.removeChild(e.target.parentNode);
 }


var span = document.getElementById("myspan");
span.onclick = function() {
    document.getElementById("myModal1").style.display = "none";
  }

 
