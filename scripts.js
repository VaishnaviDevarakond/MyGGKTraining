today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");


//
months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
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

var users = ["vaishnavi","sai","Aman","Vasudevan","Chandra"];

// var events = new Map();
// events.set(id, 
//      {
//     'id' : id,
//     'date' :"2020-08-12",
//     'title' : "milestone stand upppppppppppppppppppppppppppppppppp",
//     'from' : "08:00",
//     'to':"09:00",
//     'description': "standup",
//     'attendees':["vaish", "sai"]
//     }
// )

// events.set(++id, 
//     {
//    'id' : id,
//    'date' : "2020-08-13",
//    'title' : "milestone stand up",
//    'from' : "08:00",
//    'to':"09:00",
//    'description': "standup",
//    'attendees':["vaish", "sai"]
//    }
// )

// events.set(++id, 
//     {
//    'id' : id,
//    'date' : new Date(2020,7,13),
//    'title' : "milestone stand up",
//    'from' : "08:00",
//    'to':"09:00",
//    'description': "standup",
//    'attendees':["vaish", "sai"]
//    }
// )

// events.set(++id, 
//     {
//    'id' : id,
//    'date' :"2020-08-03",
//    'title' : "milestone stand up",
//    'from' : "08:00",
//    'to':"09:00",
//    'description': "standup",
//    'attendees':["vaish", "sai"]
//    }
// )

// events.set(++id, 
//     {
//    'id' : id,
//    'date' : "2020-08-04",
//    'title' : "milestone stand up",
//    'from' : "08:00",
//    'to':"09:00",
//    'description': "standup",
//    'attendees':["vaish", "sai"]
//    }
// )

// events.set(++id, 
//     {
//    'id' : id,
//    'date' : "2020-08-05",
//    'title' : "milestone stand up",
//    'from' : "08:00",
//    'to':"09:00",
//    'description': "standup",
//    'attendees':["vaish", "sai"]
//    }
// )

// events.set(++id, 
//     {
//    'id' : id,
//    'date' :"2020-08-06",
//    'title' : "milestone stand up",
//    'from' : "08:00",
//    'to':"09:00",
//    'description': "standup",
//    'attendees':["vaish", "sai"]
//    }
// )

// events.set(++id, 
//     {
//    'id' : id,
//    'date' : "2020-08-07",
//    'title' : "milestone stand up",
//    'from' : "08:00",
//    'to':"09:00",
//    'description': "standup",
//    'attendees':["vaish", "sai"]
//    }
// )

// events.set(++id, 
//     {
//    'id' : id,
//    'date' : "2020-08-07",
//    'title' : "L&D Session",
//    'from' : "10:00",
//    'to':"11:00",
//    'description': "standup",
//    'attendees':["vaish", "sai"]
//    }
// )

// events.set(++id, 
//     {
//    'id' : id,
//    'date' : "2020-08-07",
//    'title' : "Team Meeting",
//    'from' : "09:00",
//    'to':"10:00",
//    'description': "standup",
//    'attendees':["vaish", "sai"]
//    }
// )

var events = [];
const fetchEvents = async () => {
    try {
        const res = await fetch('http://localhost:3000/events/');
        if (!res.ok) {
            throw new Error(res.status);
        }
        events= await res.json();
    //     console.log(data);
    //     data.forEach(r=>{
    //         let temp = r;
    //         console.log(r);
    //         events.set(r.id, temp);
    //     });
    //    console.log(events);
    //events = data;
       showCalendar(currentMonth, currentYear);
    } catch (error) {
        console.log(error);
    }
}

fetchEvents();

const postEvents = async (options) => {
    try {
        const res = await fetch('http://localhost:3000/events/',options);
        events =await res.json();
       // fetchEvents();
        showCalendar(currentMonth, currentYear);
    } catch (error) {
        console.log(error);
    }
}

const putEvents = async (options,id) => {
    try {
        let res = await fetch(`http://localhost:3000/events/${id}`,options);
        //fetchEvents();
        events =await res.json();
        showCalendar(currentMonth, currentYear);
    } catch (error) {
        console.log(error);
    }
}

// fetch('http://localhost:3000/events/', options)
//     .then(res => res.json())
//     .then(res => console.log(res));

// fetch('http://localhost:3000/events/')
//     .then(res => res.json())
//     .then(res => {
//         res.forEach(r=>{
//             let temp = r;
//             console.log(r);
//             events.set(r.id, temp);
//         });
//         });
    
// console.log(events)
// console.log(Array.from(events.values()));
// console.log(events.values())
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
 function  displayEventPopUp(filteredEvent,e){
        
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
        let li = document.createElement("li");
        li.className = "ist-group-item d-flex justify-content-between align-items-center";
        li.appendChild(document.createTextNode(event.attendees[i]));
        li.style = "cursor:pointer";
        let span = document.createElement("SPAN");
        span.innerText = "\u00D7";
      //  var txt = document.createTextNode("\u00D7");
        span.className = "badge badge-primary badge-pill";
        span.style = "cursor:pointer";
        span.id = "closelistitem";
        span.addEventListener('click',closeListItem.bind(this,parentlist));
       // span.appendChild(txt);
        li.appendChild(span);
        parentlist.appendChild(li);
    }
    document.getElementById("updatepopupsubmit").onclick = (e)=>{
            let updatedEvent = {};
            updatedEvent.title = document.getElementById("utitle").value;
            updatedEvent.from = document.getElementById("ufrom").value;
            updatedEvent.to = document.getElementById("uto").value;
            updatedEvent.description = document.getElementById("udesc").value;
            updatedEvent.date = document.getElementById("udate").value;
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
    console.log(updatedEvent);
    console.log(event);
        if(!_.isEqual(updatedEvent, event)){
           // events.set(event.id, updatedEvent);
           console.log("inside if")
           const options = {
            method: 'PUT',
            body: JSON.stringify(updatedEvent),
            headers: {
                'Content-Type': 'application/json'
            }
        }
            putEvents(options,event.id)
            document.getElementById("myModal1").style.display = "none";
        }
        else{
            alert("Edit required fields to update");
        document.getElementById("myModal1").style.display = "none";
        }
        }
        e.stopPropagation();
        
    }

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
   // console.log(firstDay);
    tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;
    // creating all cells
    let date = 1;
    let daysinMonth = daysInMonth(month, year);
    let tempDaysInMonths = daysinMonth;
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
                cell.style = "background-color: rgb(250 249 248);";
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
                    //cell.classList.add("bg-dark");
                    //cell.className("bg-dark")
                    cell.style = "background-color: rgb(222 236 249)"
                } // color today's date

                if(date<today.getDate()&& year === today.getFullYear() && month === today.getMonth()){
                    cell.style = "background-color: rgb(250 249 248);";
                }
                cell.appendChild(cellText);
                cell.id = date;
                //cell.addEventListener('click',eventDisplay, true);
                row.appendChild(cell);
                cell.appendChild(button);
                // console.log(events);
                // console.log(year+"-0"+(month+1)+"-"+"-0"+date);
                 let formatedDate;
                 if(date<10 && month<9){
                    formatedDate = year+"-0"+(month+1)+"-"+"0"+date;
                 }
                 else if(date<10 && month==9){
                    formatedDate = year+"-"+(month+1)+"-"+"0"+date;
                 }
                 if(date>=10 && month==9){
                    formatedDate = year+"-"+(month+1)+"-"+date;
                 }
                 else if(date>=10 && month<9){
                    formatedDate = year+"-0"+(month+1)+"-"+date;
                 }
               //  console.log(formatedDate)
                var filteredEvent =events.filter(event => event.date == formatedDate);
                cell.addEventListener('click',eventDisplay.bind(this,filteredEvent));
                if(filteredEvent.length>1)
                filteredEvent.sort(function (a, b) {
                    return a.from.localeCompare(b.from);
                })
              // console.log(filteredEvent)
                // if(filteredEvent.length>0){
                //     for(let i=0; i<filteredEvent.length;i++){
                //     var label = document.createElement("SPAN"); 
                //     label.className = "badge badge-primary";
                //     label.id = filteredEvent[i].id;
                //     label.innerText = filteredEvent[i].title;
                //    // label.style = ":hover"
                //     label.addEventListener('click', displayEventPopUp.bind(this, filteredEvent));
                //     cell.appendChild(label);
                //     }
                // }

                if(filteredEvent.length>0){
                    if(filteredEvent.length==1){
                        let label = document.createElement("SPAN"); 
                        label.className = "badge badge-primary";
                        label.id = filteredEvent[0].id;
                        label.innerText = filteredEvent[0].title;
                        label.style = "cursor:pointer;width: 100%";
                        label.setAttribute("data-toggle","tooltip");
                        label.setAttribute("title",filteredEvent[0].from);
                        label.addEventListener('mouseover', ()=>{
                            $(document).ready(function(){
                            //$('#'+label.id).tooltip();
                            $('[data-toggle="tooltip"]').tooltip(); 
                            }  
                          )})
                        
                        
                      
                       // label.addEventListener('mouseover',)

                        // let tooltip = document.createElement("SPAN"); 
                        // tooltip.className = "tooltiptext";
                        // tooltip.innerText = filteredEvent[i].from;
                        //label.appendChild(tooltip);

                        label.addEventListener('click', displayEventPopUp.bind(this, filteredEvent));
                        cell.appendChild(label);
                    }
                    else{
                        let label = document.createElement("SPAN"); 
                        label.className = "badge badge-primary";
                        label.id = filteredEvent[0].id;
                        label.innerText = filteredEvent[0].title;
                        label.style = "cursor:pointer; width: 100%";
                        label.addEventListener('click', displayEventPopUp.bind(this, filteredEvent));
                        label.setAttribute("data-toggle","tooltip");
                        label.setAttribute("title",filteredEvent[0].from);
                        label.addEventListener('mouseover', ()=>{
                            $(document).ready(function(){
                            //$('#'+label.id).tooltip();
                            $('[data-toggle="tooltip"]').tooltip(); 
                            }  
                          )})
                        cell.appendChild(label);

                        var dotlabel = document.createElement("SPAN"); 
                        dotlabel.className = "badge badge-primary";
                        dotlabel.style = "cursor:pointer";
                        dotlabel.id = "dot"
                        dotlabel.innerText = "...";
                        dotlabel.addEventListener('click', eventDisplay.bind(this, filteredEvent));
                        cell.appendChild(dotlabel);

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

function openPopup(e){
document.getElementById("myModal").style.display = "block";
let formatedDate;
if(this.id<10 && currentMonth<9){
   formatedDate = currentYear+"-0"+(currentMonth+1)+"-"+"0"+this.id;
}
else if(this.id>=10 && currentMonth<9){
   formatedDate = currentYear+"-0"+(currentMonth+1)+"-"+this.id;
}
else if(date<10 && month==9){
    formatedDate = year+"-"+(month+1)+"-"+"0"+date;
 }
 else if(date>=10 && month==9){
    formatedDate = year+"-"+(month+1)+"-"+date;
 }
document.getElementById("date").value = formatedDate;
//new Date(currentYear, currentMonth, this.id);
e.stopPropagation();
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    document.getElementById("myModal").style.display = "none";
  }
document.getElementById("popupsubmit").addEventListener('click', submitevent);
let parentlist =  document.getElementById("atendeslist");
$( function() { 
    $( "#attend" ).autocomplete({ 
      source: users   
    }); 
  } ); 
document.getElementById("addattendees").addEventListener('click', addAttendees.bind(this,parentlist,"attend"));
document.getElementById("uaddattendees").addEventListener('click', addAttendees.bind(this,document.getElementById("uatendeslist"),"uattend"));
//document.getElementById("ed").addEventListener('click', eventDisplay);
function eventDisplay(filteredEvent,e){
    let div = document.getElementById("eventdisplay")
    div.style.display = "block";
    let displaydiv =  document.getElementById("insidediv");
    displaydiv.innerHTML = "";
    if(filteredEvent.length>1)
                filteredEvent.sort(function (a, b) {
                    return a.from.localeCompare(b.from);
                })
              // console.log(filteredEvent)
                if(filteredEvent.length>0){
                    
                    document.getElementById("dayanddate").innerText = new Date(filteredEvent[0].date).toDateString();
                    for(let i=0; i<filteredEvent.length;i++){
                        let maindiv1 = document.createElement("DIV");
                        maindiv1.className = "card";
                    let maindiv = document.createElement("DIV");
                    maindiv.style = "display:flex";
                   
                    //maindiv.className = "bg-secondary text-white";
                    let subdiv1 = document.createElement("DIV");
                    subdiv1.style = "flex:1";
                    let h2 = document.createElement("h5");
                    h2.className="text-dark";
                    h2.innerText = 
                    `Start:${filteredEvent[i].from}`;
                   // Duration: 30 mins;
                    h2.style = "padding:10%";
                    subdiv1.append(h2);
                    maindiv.append(subdiv1);
                    let subdiv2 = document.createElement("DIV");
                    subdiv2.style = "flex:2";
                    let label = document.createElement("SPAN"); 
                    label.className = "badge badge-light";
                    label.style = "cursor:pointer;width:100%; padding:5%";
                    label.id = filteredEvent[i].id;
                    label.innerText =
                    `${filteredEvent[i].title}
                     ${filteredEvent[i].description} ` ;
                   // label.appendChild(document.createElement("BR"));
                   // label.innerText = filteredEvent[i].description;

                    subdiv2.append(label)
                    maindiv.append(subdiv2);

                    maindiv1.append(maindiv);
                  
                   // label.style = ":hover"
                    label.addEventListener('click', displayEventPopUp.bind(this, filteredEvent));
                   displaydiv.appendChild(maindiv1);
                }
                div.append(displaydiv);
                }
                else{
                      let img = document.createElement("IMG");
                      img.src = "./calender.jpg" ;
                      img.style = "position: absolute; top: 50%; left: 70%; width: 50%; height: 50%;  margin-top: -250px; margin-left: -250px;"
                      
                      
                      /* Half the height */
                      
                      // width:30%; height:40%;"
                      displaydiv.appendChild(img);

                      let h2 = document.createElement("h5");
                      h2.className="text-warning";
                      h2.innerText = "Hurray! No events today";
                      h2.style = "position: absolute; top: 50%; left: 70%; width: 50%; height: 50%;  margin-top: -250px; margin-left: -250px;"

                      displaydiv.appendChild(h2)

                      //div.appendChild(displaydiv);
                    //<img src="C:\Users\vaishnavi.devarakond\Desktop\calender.jpg" alt="HTML5 Icon" style="width:128px;height:128px;"></img>
                    document.getElementById("dayanddate").innerText = new Date(currentYear, currentMonth, e.target.id).toDateString();
                }
}
function submitevent(){
    let event={};
    let attendees = []; 
    //let tempid = ++id;
    event.title = document.getElementById("title").value;
    event.from = document.getElementById("from").value;
    event.to = document.getElementById("to").value;
    event.description = document.getElementById("desc").value;
    event.date = document.getElementById("date").value;
    // let date = document.getElementById("date").value;
    //     let tempDate = date.split("-")
    //     console.log(tempDate)
    //     event.date= new Date(tempDate[0], tempDate[1]-1, tempDate[2])
         console.log(event.date);
   // event.id = tempid;
    parentlist =  document.getElementById("atendeslist");
    let childNodes = parentlist.childNodes;
    for(let i=0; i< childNodes.length; i++){
        let str = childNodes[i].innerText
       if(str){
            attendees.push(str.substring(0, str.length-2));
       }
    }
    event.attendees = attendees;
    //events.set(tempid,event);

    const options = {
        method: 'POST',
        body: JSON.stringify(event),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    postEvents(options);
    // document.getElementById("myModal").style.display = "none";
    // console.log(event);
    // showCalendar(currentMonth, currentYear);
}

//C:\Users\vaishnavi.devarakond\Calender
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

 
