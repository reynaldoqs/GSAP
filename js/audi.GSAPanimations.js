window.addEventListener('load',()=>{
    var container = document.querySelector('#container');
    var button = document.querySelector('button');
    var image = document.querySelector('img');
    button.addEventListener('click',()=>{
       var firstAnimation = TweenLite.to(image, 1.4,{
            css:{
                rotationY:360,
                transformOrigin:'right 50% -40',
                width:'100%',
                height:'100%',
                borderRadius:'0%'
            },
            ease: Power1.easeOut,
            onComplete:()=>{
                firstAnimation.reverse();
            },
        },)
    },false);

},false);