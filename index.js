 function choose_difficulty(maze_type){
    if(maze_type == null){
        window.location.href = "index.html"
    }
    else{
        window.location.href = "difficulty.html?maze=" + maze_type
    }
}

function choose_challenge_type(challenge,increment, speed){
    if(increment == null || speed == null || challenge ==  null){
        window.location.href = "index.html"
    }
    else{
        window.location.href = challenge + ".html?increment=" +  increment + "&speed=" +  speed
    }
}