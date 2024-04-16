# first task start

# Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed

# def sum_two_smallest_numbers(numbers):
#     sorted_numbers = sorted(numbers)
    
#     return sorted_numbers[0] + sorted_numbers[1]

# first task end


# second task start

# Make a program that filters a list of strings and returns a list with only your friends name in it

# def friend(names_list):
#     friends = []
    
#     for name in names_list:
#         if len(name) == 4:
#             friends.append(name)
    
#     return friends

# second task end


# third task start

# Simple, given a string of words, return the length of the shortest word(s).String will never be empty and you do not need to account for different data types

# def find_short(s):
#     words_list = s.split(" ")
    
#     min_length = len(words_list[0])
    
#     for word in words_list:
#         if min_length > len(word):
#             min_length = len(word)
    
    # return min_length

# third task end


# fourth task start

# You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters

# def get_middle(s):
#     if len(s) % 2 == 0:
#         return s[len(s) // 2 - 1: len(s) // 2 + 1]
#     else:
#         return s[len(s) // 2]
    
# fourth task end


# fifth task start

# In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number

# def high_and_low(numbers):
#     numbers = numbers.split(" ")
#     new_list = []
#     for i in numbers:
#         new_list.append(int(i))
#     lowest_num = min(new_list)
#     highest_num = max(new_list)
#     return str(highest_num) + " " + str(lowest_num)

# fifth task end