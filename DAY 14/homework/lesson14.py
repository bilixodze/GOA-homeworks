
# first task start

""" Create an array which will include numbers from 0 to 20 (write it manually, without loops), then print whole array"""

# numbers = [0, 1, 2, 3, 4, 5 ,6, 7 ,8 ,9, 10,
#        11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

# print(numbers)

# first task end


# second task start

"""Create a new array, which will include even numbers from the first array. Then print this new array"""

# even_number = [0, 2, 4, 6, 9, 10, 12, 14, 16, 18, 20]

# print(even_number)

# second task end


# third task start 

"""Create an array, then add numbers from 50 to 100 to it.
In the end, print the part of this array with negatives indexes"""

# numbers = []

# for i in range(50, 100 + 1):
#     numbers.append(i)

# print(numbers)
# print(numbers[-41 :-20])

# third task end


# fourth task start

"""Ask user for two inputs and store them as variables, their type has to be int.
Then use for loop, use lower number from this two variables as start, Higher number as end, 
you do not need step. After that, you'll have to use if statement to only print multiples of five"""


num1 = int(input("Please enter whole number: "))
num2 = int(input("Please enter whole number: "))

boolian_list = []

for i in range(min(num1,num2 + 1),max(num1,num2 + 1)):
    boolian_list.append(i)
print(boolian_list)
for num in boolian_list:
    if num % 5 == 0:
        print(num)

# fourth task end 


# fifth task start

"""Create a new array. Ask user his/her age and if it will be over 18,
ask him/her name. Then add this name to already created array and print it"""

# list = []

# while True:   
#     age = int(input("please enter your age: "))
#     if age >= 18:
#       name = input("please enter your name: ")
#       print("tanks")
#       break
#     else:
#        print("please try again: ")
# list.append(name)
# list.append(age)
# print(list)

# fifth task end