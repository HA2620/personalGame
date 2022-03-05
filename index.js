function clicked(){
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    // console.log(randomNumber1);
    // console.log(randomNumber2);

    document.querySelector(".box-1 img").setAttribute("src","Images/1-"+randomNumber1+".png")
    document.querySelector(".box-2 img").setAttribute("src","Images/2-"+randomNumber2+".png")

    // alert(randomNumber1);
    // alert("Images/1-"+randomNumber1+".png");
    // alert(randomNumber2);
}

