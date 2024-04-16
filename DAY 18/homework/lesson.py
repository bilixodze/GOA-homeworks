# first task start

"""შექმენით ფუნქცია, რომელსაც გადაეცემა 1-იდან 20-ის ჩათვლით რიცხვების სია.
თქვენ უნდა დააბრუნოთ გაფილტრული სია, სადაც უკვე მარტო 4-ის ჯერადები იქნება."""

def myfunc(num_list):
    number_list = []

    for num in num_list:
        if num % 4 == 0:
            number_list.append(num)
    
    print(number_list)

number_list_2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17.18,19,20]
myfunc(number_list_2)

# first task end


# second task start

"""შექმენით ფუნქცია, რომელსაც გადასცემთ მომხმარებლისგან მიღებულ სახელსა და გვარს. 
შემდეგ ისინი დაამატეთ სიაში და დააბრუნეთ სია."""

# name_surname = input("Enter name and surname: ")

# def names_list(name):
#     name_surname_list = ["nika keshelava", "luka cxzvaradze", "vano motiashvili"]
#     name_surname_list.append(name_surname)

#     return name_surname_list

# name_surname_2 = []

# print(names_list(name_surname_2))


# second task end


# third task start 

"""მომხმარებელს შეეკითხეთ საწყისი და საბოლოო რიცხვები. ეს რიცხვები გადაეცით ფუნქციას, 
for ციკლით სიაში შეინახეთ მათ შორის არსებული რიცხვები. შემდეგ მოახდინეთ გაფილტვრა, 
ისევ for ციკლით განიხილეთ თითოეული რიცხვი - თუ რიცხვი ლუწი იქნება, ახალ სიაში დაამატეთ მისი მეორე ხარისხი, 
ხოლო თუ კენტი იქნება სიაში დაამატეთ მისი კვადრატული ფესვი (0.5 ხარისხი)."""

# def filter_list(start_num,end_num):
#     numbers = []
#     filter_list = []

#     for i in range(start_num,end_num +1):
#         numbers.append(i)
#         if i % 2 == 0:
#             filter_list.append(i ** 2)
#         else:
#             filter_list.append(i ** 0.5)
#     print(numbers)

#     return filter_list

# start_num = int(input("Enter start number: "))
# end_num = int(input("Enter end number: "))

# result = filter_list(start_num,end_num)

# print(result)

# third task end


# fourth task start

"""შექმენით ფუნქცია, რომელსაც გადასცემთ მომხმარებლის გვარს. გვარის თითოეული ასო გადაიტანეთ ახალ სიაში. 
შემდეგ for ციკლის გამოყენებით იმუშავეთ ამ სიაზე - მარტო ლუწ ინდექსებზე მყოფი ასოები დაამატეთ ახალ სიაში. 
საბოლოოდ დააბრუნეთ ეს სია. Bonus (არაა სავალდებული): ეს სია გარდაქმენით სთრინგად და ამ სახით დააბრუნეთ"""

# def filtered_index(surname):
#     char_list = []
#     even_index_char = []

#     for char in surname:
#         char_list.append(char)
    
#     print(char_list)

#     for index in range(len(char_list)):
#         if index % 2 == 0:
#             even_index_char.append(char_list[index])
    
#     return "".join(even_index_char)

# surname = input("Enter your surname: ")

# fourth task end