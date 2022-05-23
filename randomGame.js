function randomGame()
{
    var num ;
    var times = 0;
    var timer = setInterval(function() 
    {
        num = Math.random().toFixed(2);
        times++;
        if(num > 0.75)
        {
            clearInterval(timer);           
            console.log("It took " + times + " try/tries and the current random number is : " + num);
        }
        else
        {
            console.log("The random number is : " + num);
        }
    }, 1000);

}

randomGame()