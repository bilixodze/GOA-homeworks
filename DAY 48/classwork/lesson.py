# 1)

def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"
    

# 2)

def solution(string):
    return string[::-1]


# 3)

def repeat_str(repeat, string):
    return repeat * string


# 4)

def sum_two_smallest_numbers(numbers):
    sorted_num = sorted(numbers)
    return sorted_num[0] + sorted_num[1]


# 5)

def max_multiple(divisor, bound):   
    multiple = []
    
    for num in range(divisor, bound + 1):
        if num % divisor == 0:
            multiple.append(num)
            
    return max(multiple)


# 6)

def check_exam(arr1,arr2):
    score = 0
    
    for index in range(len(arr1)):
        if arr1[index] == arr2[index]:
            score += 4
        elif arr2[index] == "":
            score += 0
        else:
            score -= 1
            
    if score < 0:
        return 0
    else:
        return score
    

# 7)

def row_weights(array):
    team1 = 0
    team2 = 0
    
    for index in range(len(array)):
        if index % 2 == 0:
            team1 = team1 + array[index]
        else:
            team2 = team2 + array[index]
            
    return [team1, team2]