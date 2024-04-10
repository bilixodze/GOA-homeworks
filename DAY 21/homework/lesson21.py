# first task start

"""Given a non-empty array of integers, 
return the result of multiplying the values together in order"""

# def multiply(values):
#     result = 1
#     for num in values:
#         result *= num
#     return result

# number = [1,2,3,4,5]

# print(multiply(number))

# first task end


# second task start

"""Write function bmi that calculates body mass index (bmi = weight / height2"""

# def bmi(weight, height):
#     height_squared = height * height
#     bmi_value = weight / height_squared
#     if bmi_value <= 18.5:
#         return "Underweight"
#     elif bmi_value <= 25.0:
#         return "Normal"
#     elif bmi_value <= 30.0:
#         return "Overweight"
#     else:
#         return "Obese"

# second task end


# third task start 

"""Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces."""

# def get_count(sentence):
#     count = 0
#     vowels = ["a","e","i","o","u"]
#     for char in sentence:
#         if char in vowels:
#             count+=1
#     return count

# third task end


# fourth task start

"""In this kata, you are asked to square every digit of a number and concatenate them"""

# def square_digits(num):
#     res_str = ""
#     num_str = str(num)
#     for i in num_str:
#         res_str += str(int(i)**2)
#     return int(res_str)


# print(square_digits(9199))

# fourth task end


# fifth task start

"""Your task is to make a function that can take any non-negative integer 
as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number"""

# def descending_order(num):
#     num = str(num)
#     num = list(num)
#     num = sorted(num)
#     num = reversed(num)
#     num = "".join(num)
#     return int(num)

# fifth task end