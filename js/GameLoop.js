var canvas, context, player, timer, interval = 1000/60

canvas = document.getElementById("canvas")
context = canvas.getContext("2d")

player = new GameObject(canvas.width/2, canvas.height/2, 100, 50)
player.vx = -5;
player.vy = 0;

npc1 = new GameObject(50,canvas.height/2, 50, 50, "#00ff00");
npc2 = new GameObject(300,canvas.height/2, 75, 75, "#fffb00");
npc3 = new GameObject(800,canvas.height/2, 60, 60, "#FFEBCD");

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    // if(d)
    // {
    //     player.x += 4
    // }

    // if(a)
    // {
    //     player.x -= 4
    // }

    player.move();

    
    if(player.x > player.width/2 > canvas.width)
    {
        player.x = canvas.width - player.width/2;
        player.vx *= -1;
    }



    //  if(player.x > canvas.width + player.width/2 - 100)
    // {
    //     player.vx = 10;
    // }
    // if(player.x < 0 + player.width/2)
    // {
    //     player.vx +=10;
    // }
    // if(player.y > canvas.height + player.height/2 - 100)
    // {
    //     player.vy = -10;
    // }
    // if(player.y < 0 + player.height/2)
    // {
    //     player.vy = 10;
    // }

    //NPC1 COLLISION

    if(npc1.collisionCheck(player))
    {
        npc1.color = "yellow"
    }
    else
    {
        npc1.color = "green"
    }

    //NPC2 COLLISION
    // if(npc2.collisionCheck(player))
    //     {
    //         context.strokeRect(npc2.x-npc2.width/2, npc2.y-npc2.height/2, npc2.width, npc2.height);
    //     } 

    //     if(npc3.collisionCheck(player))
    //     {
    //         player.x = player.prevX;
    //     }
        // else
        // {
        //     player.prevX = player.x;
        // }
    player.drawCircle();
    npc1.drawCircle();
    npc2.drawCircle();
    npc3.drawRect();
    

}

