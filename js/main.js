let days = document.getElementById('js-days');
let hours = document.getElementById('js-hours');
let minutes = document.getElementById('js-minutes');
let seconds = document.getElementById('js-seconds');


let thoiGian = 0;

function time(x){
    thoiGian = x;
    countdown();
}

time(100000);

function countdown(){
    thoiGian--;
    soNgay = Math.floor((thoiGian / 86400))
    soGio = Math.floor((thoiGian - soNgay*86400) / 3600);
    soPhut = Math.floor((thoiGian - soNgay*86400 - soGio*3600) / 60); 
    soGiay = thoiGian - soNgay*86400 - soGio*3600 - soPhut*60;

    soNgay = soNgay < 10 ? '0' + soNgay : soNgay; 
    soGio = soGio < 10 ? '0' + soGio : soGio; 
    soPhut = soPhut < 10 ? '0' + soPhut : soPhut; 
    soGiay = soGiay < 10 ? '0' + soGiay : soGiay; 

   
    days.innerHTML = soNgay;
    hours.innerHTML = soGio;
    minutes.innerHTML = soPhut;
    seconds.innerHTML = soGiay;

    
   
   
    if(thoiGian > 0){
        setTimeout(countdown, 1000);
    }else {
        return 0;
    }
}