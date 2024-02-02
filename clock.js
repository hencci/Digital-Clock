const clock = document.querySelector("#clockLabel");



function update() {
    let date = new Date();
    clock.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours < 12? "am" : "pm";
        hours = (hours % 12) || 12;

        hours = zeroes(hours);
        minutes = zeroes(minutes);
        seconds = zeroes(seconds);

        return `${hours}:${minutes}:${seconds} ${amOrPm}`
    }

    function zeroes(time){
        time = time.toString();
        return time.length < 2? "0" + time : time;
    }
}

update();
setInterval(update, 1000)