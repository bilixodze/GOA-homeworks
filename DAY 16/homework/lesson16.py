# create a street quiz

"""შექმენით ქუჩის ქვიზი, 
სადაც ბენსიმონებში გაზმანული შავი ბიჭი გამვლელს შეეკითხება "რა კაცი ხარ" 

ხოლო სავარაუდო პასუხების მიხედვით გადაწყდება მისი ბედი
1) ცემა 
2) დაძმაკაცება 
3) ფულის ახევა"""

one = "რა შენი საქმეა"

two = "კაი ბიჭი"

three = "პატიოსანი"

question = input("რა კაცი ხარ ? ")

if question == one:
    print("ცემა")
elif question == two:
    print("დაძმაკაცება")
elif question == three:
    print("ფულის ახევა")
else:
    print("გაქცევა")

# puiz end