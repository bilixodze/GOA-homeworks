from turtle import *

shape("turtle")



#we wont to paint a house
#step 1: draw a square

width(7)
color("purple")
begin_fill()

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()
#end of square
#drawin a door

forward(70)

color("yellow")
begin_fill()

left(90)
forward(110)    #hight of the door
right(90)
forward(60)
right(90)
forward(110)
end_fill()

penup()
goto(200,200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

penup()
goto(0,0)
right(150)
forward(120)
pendown()
color("green")
begin_fill()
right(90)
forward(50)
left(90)
forward(40)
left(90)
forward(50)
end_fill()

penup()
goto(200,200)
left(90)
forward(40)
right(90)
pendown()
begin_fill()
forward(50)
left(90)
forward(40)
left(90)
forward(40)
end_fill()


exitonclick()