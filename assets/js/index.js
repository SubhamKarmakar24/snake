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