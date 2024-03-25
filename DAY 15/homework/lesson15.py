# first task start

"""Write a program that takes asks user for number (use input). 
If number is even, print that number is even. Else print that number is not even,
also print next even number, for example if input is 15, print 16."""

# even_list = []
# for i in range(10):
#   num = int(input("please enter number:"))
#   if num % 2 == 0:
#     even_list.append(num)
#     print("number is even")
#     print(even_list)
#   else:
#     add_num = num + 1
#     even_list.append(add_num)
#     print("number is not even")
#     print(even_list)

# first task end
    

# second task start
    
"""Create a while loop that asks the user to enter a password. 
Keep asking until they enter the correct password "Goa best". 
Also print the count of incorrect passwords."""

# password = "Goa best"

# while True:
#     input_pasword = input("Please enter your pasword: ")
#     if input_pasword == password:
#         print("Your password is correct. You have successfully logged in")
#         break
#     else:
#         print("your password incorect. please try again: ")

# second task end
        

# third task start 

"""Write an algorithm that takes a string as input 
and returns True if first character of that string is "G"."""

# while True:
#     str = input("please enter your str: ")
#     if str[0] == "G" or str[0] == "g" :
#         print("corect")
#     else:
#         print("incorect")    

# third task end


# fourth task start

# name_list = []

# name = input("please enter name: "), input("please enter name: "),input("please enter name: "),
# input("please enter name: "),input("please enter name: ")

# name_list.append(name)

# print(name_list[:3])

# fourth task end


# fifth task start

"""Write an algorithm that checks if a given number is prime or not
(prime number has only two divisors - გამყოფი) Use a for loop for this task."""

# num1 = int(input("please enter number: "))

# if num1 % 2 == 0:
#     print("number is prime")
# else:
#     print("number is not prime")

# ?????????????????????????????????????????

# fifth task end


# sixth task start

"""Create a while loop that prints numbers from 10 to 0 ."""

# number =[10,9,8,7,6,5,4,3,2,1,0]

# while True:
#     number[-10:0]
#     print(number)
#     break

# sixth task end


# seventh task start

"""Implement a simple calculator that takes two numbers and an operator (+, -, *, /)
 as input from the user and performs the corresponding operation. Bonus task if you want, 
 it's not necessary - add degree (ხარისხი), use ** operator for it."""


# addition
# num1 = int(input("please enter number: "))
# num2 = int(input("please enter number: "))

# result1 = num1 + num2
# print(result1)

# # deduction
# num3 = int(input("please enter number: "))
# num4 = int(input("please enter number: "))

# result2 = num3 - num4
# print(result2)

# # multiply
# num5 = int(input("please enter number: "))
# num6 = int(input("please enter number: "))

# result3 = num5 * num6
# print(result3)

# # division
# num7 = int(input("please enter number: "))
# num8 = int(input("please enter number: "))

# result4 = num7 / num8
# print(result4)

# seventh task end


#eighth task start

"""Ask user to enter name and print the last character of that string."""

# name = input("please enter your name: ")
# index_name = name[-1]
# print(index_name)

#eighth task end


# ninth task start

"""Using for loop, ask user for number. Then create a list which will have
 even numbers in next range: from 0 to user's number. At last, print out whole list. """

# number_list = [0,]

# for i in range(10):
#     number = int(input("please enter even number: "))
#     if number % 2 == 0:
#       number_list.append(number)
#     else:
#        print("try again: ")
# print(number_list)

# ninth task end


# tenth task start

"""Ask user for whole number. Then create a factorial for this number and print it out."""

user_num = int(input("Enter number: "))

factorial = 1

for i in range(2, user_num + 1):
    factorial *= i
    print(factorial * i)
print(factorial)

# tenth task end