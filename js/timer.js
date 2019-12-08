
//------------------------------------ time function ------------------------------------------ 

let timer = function()
{
    sec1+=1;
    if (sec1 ===10)
    {
        sec1 = 0;
        sec2+=1;
    }
    if(sec2 ===6)
    {
        sec2 = 0;
        min1 +=1;
    }
    if(min1 === 10)
    {
        min1 = 0;
        min2+=1
    }
    totalSeconds++;
    document.getElementById("timeValue").innerText=`${min2}${min1}:${sec2}${sec1}`
};
