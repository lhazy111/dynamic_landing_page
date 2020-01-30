const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');
    document.body.style.backgroundSize = 'cover';
    name.textContent = 'Lukasz';

 function showTime(){
     let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

        time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`
         setTimeout(showTime, 1000);
 }

 function addZero(n) {
     return (parseInt(n) <10 ? '0' : '') + n;
 }

 function setBgGreet(){
     let today = new Date(),
     hour = today.getHours();

     if(hour<12) {
         document.body.style.backgroundImage = "url('dawid-zawila-118913-unsplash.jpg')";
        greeting.textContent = 'Good Morning';
     } else if (hour > 12 && hour < 18) {
        document.body.style.backgroundImage = "url('gustavo-quepon-129114-unsplash.jpg')";
        greeting.textContent = 'Good afternoon';
     } else {
         document.body.style.backgroundImage = "url('kristopher-roller-110203-unsplash.jpg')";
         greeting.textContent = 'Good evening';
         document.body.style.color = 'white';

     }
 }
showTime();
setBgGreet();
time.addEventListener('')