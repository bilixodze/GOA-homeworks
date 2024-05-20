# first task start

# Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string)

# def solution(text, ending):
#     return text.endswith(ending)

# first task end


# second task start

# Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case

# def is_triangle(a, b, c):
#     if a <= 0 or b <= 0 or c <= 0:
#         return False
#     if a + b > c and a + c > b and b + c > a:
#         return True
#     else:
#         return False

# second task end


# third task start 

# There is a bus moving in the city which takes and drops some people at each bus stop.

# There is a bus moving in the city which takes and drops some people at each bus stop.You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :DTake a look on the test cases.Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.The second value in the first pair in the array is 0, since the bus is empty in the first bus stop

# es ver mivxvdi

# third task end


# fourth task start

# Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained

# def reverse_words(text):
#     words = text.split(" ")
#     reversed_words = [word[::-1] for word in words]
#     return " ".join(reversed_words)

# fourth task end


# fifth task start

# Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.a and b will both be positive integers, and a will always be the first number in the operation, and b always the second

# def arithmetic(a, b, operator):
#     if operator == "add":
#         return a + b
#     elif operator == "subtract":
#         return a - b
#     elif operator == "multiply":
#         return a * b
#     elif operator == "divide":
#         return a / b

# fifth task end