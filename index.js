
var choice = prompt("Do you prefer the option to play the keys upon moving your cursor across them, or upon clicking them?");
var number = document.querySelectorAll('.key').length;
for(let i = 0; i < number ; i++) {
    document.querySelectorAll('.key')[i].addEventListener(choice, function (){
        var condn = this.innerHTML;
        actUpon(condn);
        
    })
}
document.addEventListener("keydown", function (event){
    actUpon(event.key);
})
function actUpon(key){
    switch (key){
        case "c":
            var audio = new Audio('./audio/piano-a_A_major.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('./audio/piano-b_B_major.mp3');
            audio.play();
            break;
        case "e":
            var audio = new Audio('./audio/piano-c_C_major.mp3');
            audio.play();
            break;
        case "f":
            var audio = new Audio('./audio/piano-d_D_major.mp3');
            audio.play();
            break;
        case "g":
            var audio = new Audio('./audio/piano-e_E_major.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('./audio/piano-f_F_major.mp3');
            audio.play();
            break;
        case "b":
            var audio = new Audio('./audio/piano-g_G_major.mp3');
            audio.play();
            break;
        case "b1":
            var audio = new Audio('./audio/piano-g_Gsharpmajor.mp3');
            audio.play();
            break;
        case "b2":
            var audio = new Audio('./audio/piano-bb_A_major.mp3');
            audio.play();
            break;
        case "b3":
            var audio = new Audio('./audio/piano-c_Csharpmajor.mp3');
            audio.play();
            break;
        case "b4":
            var audio = new Audio('./audio/piano-eb_D_major.mp3');
            audio.play();
            break;
        case "b5":
            var audio = new Audio('./audio/piano-f_Fsharpmajor.mp3');
            audio.play();
            break;

    }
}
