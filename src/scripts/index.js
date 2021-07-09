// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import moment from "moment";

// \/ All of your javascript should go here \/
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
const h1 = document.querySelector("h1");

let happening = moment("19901026 00:00:00", "YYYYMMDD hh:mm:ss");

while (happening.diff(moment(new Date())) <= 0) {
    happening.add(1, 'years');
}
const yearHappening = moment(happening).format("YYYY");
const birthday = yearHappening - 1989;

h1.innerText = `The ${humanize(birthday)} countdown!`

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



 function humanize(number) {
    if (typeof number !== "number") {
        return "Invalid input";
    }
    if (number % 1 !== 0) {
        return "Invalid input";
    }
    switch (number.toFixed().slice(-1)) {
        case "1":
            return `${number}st`;
        case "2":
            return `${number}nd`;
        case "3":
            return `${number}rd`;
        default:
            return `${number}th`;
    }
}