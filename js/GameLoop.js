var canvas, context, player, timer, interval = 1000/60

canvas = document.getElementById("canvas")
context = canvas.getContext("2d")

player = new GameObject(canvas.width/2, canvas.height/2, 100, 50)
player.vx = 0;
player.vy = 0;

npc1 = new GameObject(50,canvas.height/2, 50, 50, "#00ff00");
npc2 = new GameObject(300,canvas.height/2, 75, 75, "#fffb00");
npc3 = new GameObject(800,canvas.height/2, 60, 60, "#FFEBCD");

timer = setInterval(animate, interval);

function animate()
{
    context.clearRect(0, 0, canvas.width, canvas.height);

    if(d)
    {
        player.x += 4
    }

    if(a)
    {
        player.x -= 4
    }

    player.move();

    
    if(player.x > canvas.width + player.width/2 - 100)
    {
        player.vx *= -1;
    }
    if(player.x < 0 + player.width/2)
    {
        player.vx = 30;
    }
    if(player.y > canvas.height + player.height/2 - 100)
    {
        player.vy *= -1;
    }
    if(player.y < 0 + player.height/2)
    {
        player.vy = 30;
    }

    player.drawCircle();
    npc1.drawCircle();
    npc2.drawCircle();
    npc3.drawRect();
    

}

