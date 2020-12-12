let smoothJumpUp = function() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            window.scrollBy(0,-50);
            setTimeout(smoothJumpUp, 10);
        }
    }





    let modal1 = document.getElementById('myModal');
	let btn1 = document.getElementById("myBtn");
	let span = document.getElementsByClassName("close")[0];


	btn1.onclick = function() {
    	modal1.style.display = "block";
	}
	span.onclick = function() {
    	modal1.style.display = "none";
	}
	window.onclick = function(event) {
    	if (event.target == modal) {
        	modal1.style.display = "none";
    	}
	}


    let modal12 = document.getElementById('myModal1');
    let btn2 = document.getElementById("myBtn1");
    let span2 = document.getElementsByClassName("close1")[0];


    btn2.onclick = function() {
        modal12.style.display = "block";
    }
    span2.onclick = function() {
        modal12.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal12.style.display = "none";
        }
    }

    let btn = document.getElementById ('btn234');
    let str_sec = document.querySelector ('#sec');
    let str_msec = document.querySelector ('#msec');
    let time_s = 29;
    let time_ms = 99;
    let id1; 
    let id2;

    btn.onclick = function () {
        if (input.value == '') {
            return;
        }
        else if (input.value == ' ') {
            id1 = setInterval (timer_s, 1000);
            id2 = setInterval (timer_ms, 12);
        }
    }

    function timer_s () {
        if(time_s <= 1) {
            clearInterval(id1);
        }
        time_s--;
        str_sec.innerText = time_s;
    }


    function timer_ms () {
        if (time_ms <= 1) {
            time_ms = 60;
            let id2 = setInterval (timer_ms, 12);
        } 
        if (time_s == 0) {
            clearInterval (id2);
            time_ms = 1;
        }

        time_ms--;
        str_msec.innerText = time_ms;
    }




 	let popap = document.querySelector('.window');
	function modal () {
		popap.classList.add('window__active');
	}
	setTimeout(modal, 10000);
	let popapClose = document.querySelector('.window__close');
	popapClose.onclick = function (){
		popap.classList.remove('window__active');
	}






    $("input[type='submit']").click(function() { return false; });