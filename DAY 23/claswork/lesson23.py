# 1)

"""შექმენით პროგრამა სადაც გექნებათ მოცემული სია, 
და უნდა დაითვალოთ ამ სიაში ლუწი რიცხვები"""

# def even_number(number):
#     num_1 = 0

#     for num in number:
#         if num % 2 == 0:
#             num_1 = num_1 + 1
#     return num_1

# print(even_number([1,2,3,4,5,6,7,8]))


# 2)

""" შექმენით პროგრამა სადაც გექნებათ მოცემული სტრინგი, 
ხოლო ლუწ ინდექსებზე მყოფი ელემენტები ჩაანაცვლეთ სხვა სიმბოლოთი"""

# def replace_even_indexes(word,replace_char):
#     changed_word = ''
    
#     for index in range(len(word)):
#         if index % 2 == 0:
#             changed_word = changed_word + replace_char
#         else:
#             changed_word = changed_word + word[index]
            
#     return changed_word


# print(replace_even_indexes("onise bilikhodze", "1"))


# 3)

"""იპოვეთ სიაში ბოლო ლუწი რიცვხის ინდექსი"""

# def find_last_even(numbers_list):
#     for i in range(len(numbers_list) - 1, -1, -1):
#         if numbers_list[i] % 2 == 0:
#             return numbers_list[i]

# print(find_last_even([1,2,3,4,5]))


# 4)

"""პირველი + ამოვაკლოთ"""

# def my_join(join_str, strings_list):
#     joined_elemnts = ''
    
#     for word in strings_list:
#         joined_elemnts += join_str + word
    
#     return joined_elemnts [1:] 

# print(my_join("+", ["1","2","3"])) 


# 5)

"""გადმოგეცემათ რიცხვთა სია ფუნქციაში, თვქენი დავალებაა ამ სიაშ მყოფი ლუწი რიცხვები 
შეართოთ + ის მეშვეობით და დააბრუნოთ საბოლოო შედეგად სტრინგი, შესატანი მონაცემი: [1,2,3,4],

საბოლოო შედეგი: "2+4"

გაითვალისწინეთ ის რომ თუ სიაში ერთი ლუწი რიცხვია, დააბრუნეთ პირდაპირ

ხოლო თუ არარის სიაში ლუწი რიცხვი მაშინ დააბრუნეთ ცარიელი სტრინგი"""


