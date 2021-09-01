import turtle

for i in range(15):
    turtle.right(180-(180/15))
    turtle.forward(120)
    for j in range(4):
        turtle.forward(10)
        turtle.right(90)

turtle.exitonclick()
