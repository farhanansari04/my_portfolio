var h = document.querySelector('#head');

window.addEventListener('scroll', function (){

    if(window.pageYOffset > 200){
        h.style.top = '-100%';
    }
    else{
        h.style.top= '0px';
    }

});

// up-arrow javascript 

var fix = document.querySelector('.fixed-up');

window.addEventListener('scroll', function (){

    if(window.pageYOffset > 100){
        fix.style.display = 'flex';
    }
    else{
        fix.style.display = 'none';
    }

});

AOS.init({
    duration: 120,
  });


var hr = document.querySelector('#hire');

var fom = document.querySelector('form');

var cut = document.querySelector('.cros');


 
hr.addEventListener('click', () =>{

    fom.style.display = 'flex';


});

cut.addEventListener('click', () =>{

    fom.style.display = 'none';

});


var block = document.querySelector('.contact');

var none = document.querySelector('#cont');

none.addEventListener('click', () =>{

    block.style.display = 'flex';

});

var abc = document.querySelector('.cutter');

abc.addEventListener('click', () =>{

    block.style.display = 'none';

});

var cur = document.querySelector('.curser');

window.addEventListener('mousemove', function(e){

    cur.style.left = e.clientX + 'px';
    cur.style.top = e.clientY + 'px';

});


$('.click-me').click(function (){

    $('.list').css({
        background: 'crimson',
        boxShadow:'0px 0px 4px 2px chocolate',
        borderRadius: '0px 50% 0px 50%',
        color: 'white'
    });

});

// second-div

$('.click-me').click(function (){

    $('.list2').css({
        background: 'powderblue',
        boxShadow:'0px 0px 4px 2px brown',
        borderRadius: '0px 50% 0px 50%',
        color: 'white'
    });

});

// third-div

$('.click-me').click(function (){

    $('.list3').css({
        background: 'pink',
        boxShadow:'0px 0px 4px 2px tomato',
        borderRadius: '0px 50% 0px 50%',
        color: 'white'
    });

});

// fourth-div

$('.click-me').click(function (){

    $('.list4').css({
        background: 'tomato',
        boxShadow:'0px 0px 4px 2px black',
        borderRadius: '0px 50% 0px 50%',
        color: 'white'
    });

});

// fifth-div

$('.click-me').click(function (){

    $('.list5').css({
        background: 'cadetblue',
        boxShadow:'0px 0px 4px 2px white',
        borderRadius: '0px 50% 0px 50%',
        color: 'white'
    });

});

// sixth-div

$('.click-me').click(function (){

    $('.list6').css({
        background: 'gold',
        boxShadow:'0px 0px 4px 2px teal',
        borderRadius: '0px 50% 0px 50%',
        color: 'white'
    });

});

$('.click-me').click(function (){

    $('#service').css({
        boxShadow: '0px 0px 15px 1px crimson',
        borderRadius: '10px',
        color: 'white'
    });


});

var btn5 = document.querySelector('.click-me');



btn5.addEventListener('click', () =>{

    var emoji1 = document.querySelector('.fa-face-sad-cry');

    var emoji = document.querySelector('.fa-face-smile-beam');

    emoji.style.display = 'inline';

    emoji1.style.display = 'none';
});


$('.burger-line').click(function(){

    $('.unorder').slideToggle();

});
