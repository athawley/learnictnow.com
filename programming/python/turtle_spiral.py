import turtle

side = 5

num_sides = 10
num_loops = 5

for i in range(num_loops):
    for j in range(num_sides):
        turtle.forward(side * (i+1))
        turtle.right(360/num_sides)


turtle.exitonclick()