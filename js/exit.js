let exitt=document.getElementById("close");
function closeGame()
{
    if(confirm("Are you sure you want to exit This game? :(","yes"))
        {
           window.close();
        }
}

exitt.addEventListener('click',closeGame) ;