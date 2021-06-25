// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import moment from "moment";

// \/ All of your javascript should go here \/
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let happening = moment("20211026 00:00:00", "YYYYMMDD hh:mm:ss");

days.innerText = happening.diff(moment(new Date()), 'days');
hours.innerText = (happening.diff(moment(new Date()), 'hours') % 24);
minutes.innerText = (happening.diff(moment(new Date()), 'minutes') % 60);
seconds.innerText = (happening.diff(moment(new Date()), 'seconds') % 60);

setInterval(function(){ 
    days.innerText = happening.diff(moment(new Date()), 'days');
    hours.innerText = (happening.diff(moment(new Date()), 'hours') % 24);
    minutes.innerText = (happening.diff(moment(new Date()), 'minutes') % 60);
    seconds.innerText = (happening.diff(moment(new Date()), 'seconds') % 60);
 }, 1000);
