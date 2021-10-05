function choose_difficulty(maze_type)
{
    if(maze_type == null)
    {
        window.location.href = "index.html"
    }
    else
    {
        window.location.href = "pages/difficulty.html?maze=" + maze_type
    }
}

function choose_challenge_type(challenge,increment, speed)
{
    if(increment == null || speed == null || challenge ==  null)
    {
        window.location.href = "index.html"
    }
    else
    {
        window.location.href = "maze/" + challenge + ".html?increment=" +  increment + "&speed=" +  speed
    }
}

function myFunction() {
    var element = document.body;
    var elementlist = document.getElementsByClassName("listItem");
    element.classList.toggle("dark-mode");

    for(let i = 0; i < elementlist.length; i += 1) {
        console.log(elementlist.item(i))

        elementlist.item(i).classList.toggle("list-dark-mode");
    }
}
