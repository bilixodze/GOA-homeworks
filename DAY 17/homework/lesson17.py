# first task start

"""Write a function that takes a list of numbers as 
input and returnsthe sum of all the numbers in the list"""

# num1 = int(input("enter number: "))
# num2 = int(input("enter number: "))
# num3 = int(input("enter number: "))
# num4 = int(input("enter number: "))

# def numbers(num1,num2,num3,num4):
#     return(num1 + num2 + num3 + num4 )
# print(numbers(num1,num2,num3,num4))

# first task end


# second task start

"""Write a function that takes a list of strings as input and returns a new list
 containing only the strings that have a length greater than 5."""

# def string(str_list):
#     string_list = []

#     for str in str_list:
#         if len(str) > 5:
#             string_list.append(str)
#     return string_list      

# names = ["onise","nikolozi","loka","vano","gabrieli"]

# print(string(names))

# second task end


# third task start 
            
"""Write a function that takes a list of numbers as input and returns a new list
containing only the even numbers from the original list"""

# def even_number(number):
#     num_list = []

#     for num in number:
#         if num % 2 == 0:
#             num_list.append(num)
#     return num_list

# num_list2 = [1,2,3,4,5,6,7,8,9,10]

# print(even_number(num_list2))

# third task end


# fourth task start

"""Write a function that takes a list of numbers as input and returns the largest number in the list"""

def big_numbers(number):
    return max(number)

num_list = [11,4,3,23,20,7,24,14]

print(big_numbers(num_list))

# fourth task end


# fifth task start

"""Write a function that takes a list of strings as input and returns a new list
containing only the strings that start with the letter 'a'."""

# def filter_list(str_list):
#     empty_list = []

#     for word in str_list:
#         if word[0] == "a":
#           empty_list.append(word)  

#     return empty_list

# words = [input("Enter number: "),input("Enter number: "),input("Enter number: "),
#          input("Enter number: "),input("Enter number: "),input("Enter number: ")] 

# print(filter_list(words))

# fifth task end


# sixth task start

"""Write a function that takes a list of numbers as input and 
returns a new list containing the square of each number."""

# def num_list(number):
#     number_list = []

#     for num in number:
#             number_list.append(num * num)

#     return number_list

# number_list_2 =  [int(input("Enter number: ")),int(input("Enter number: ")),
#                   int(input("Enter number: ")),int(input("Enter number: ")),
#                   int(input("Enter number: ")),int(input("Enter number: ")),]

# print(num_list(number_list_2))

# sixth task end


# seventh task start

"""Write a function that takes a list of strings as input and returns 
a new list containing the lengths of each string."""

# def str_size(str_list):
#     string_list = []

#     for word in str_list:
#         string_list.append(len(word))

#     return string_list

# word_list = [input("Enter number: "),input("Enter number: "),input("Enter number: "),
#              input("Enter number: "),input("Enter number: "),input("Enter number: ")]

# print(str_size(word_list))  

# seventh task end


# eighth task start

"""Write a function that takes a list of numbers as input and returns
 the sum of all the numbers that are greater than 10"""

# def number_list(number):
#     result = 0

#     for num in number:
#         if num > 10:
#             result = result + num
    
#     return result

# num_list = [int(input("Enter number: ")),int(input("Enter number: ")),
#             int(input("Enter number: ")),int(input("Enter number: ")),
#             int(input("Enter number: ")),int(input("Enter number: ")),]

# print(number_list(num_list))

# eighth task end