
def filter_number(number):
    filter_list = []

    for num in number:
        if num > 10 and num % 2 == 0:
            filter_list.append(num)

    return filter_list

def sum_number(number):
    sum = 0 

    for i in number:
        sum = sum + i

    return sum

count = int(input("Enter how many numbers do you want to input: "))

number = []

for i in range(count):
    numbers = int(input("Enter number: "))
    number.append(numbers)

print(filter_number(number))
print(sum_number(number))