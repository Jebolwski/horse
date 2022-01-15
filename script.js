window.onscroll = function() {scrollFunction()};

function scrollFunction (){
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        document.body.style.backgroundImage = "url('1.jpg')";
        console.log("100");
    }
    if (document.body.scrollTop>400 || document.documentElement.scrollTop > 200){
        document.body.style.backgroundImage = "url('2.jpg')";
        console.log("200");
    }
    if (document.body.scrollTop>700 || document.documentElement.scrollTop > 300){
        document.body.style.backgroundImage = "url('3.jpg')";
    }
    if (document.body.scrollTop>1000 || document.documentElement.scrollTop > 400){
        document.body.style.backgroundImage = "url('4.jpg')";
    }
    if (document.body.scrollTop>1300 || document.documentElement.scrollTop > 500){
        document.body.style.backgroundImage = "url('5.jpg')";
    }
    if (document.body.scrollTop>1600 || document.documentElement.scrollTop > 600){
        document.body.style.backgroundImage = "url('6.jpg')";
    }
    if (document.body.scrollTop>1900 || document.documentElement.scrollTop > 700){
        document.body.style.backgroundImage = "url('7.jpg')";
    }
}