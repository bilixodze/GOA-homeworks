
#შევქმენით პროგრამა სადაც მომხმარებელს შემოვატანინეთ პაროლი.

authorized = False
pasword = "goabest"

while authorized != True:
    user_input = input("enter your password: ")
    if user_input == "goabest":
        print("acces granted")
        authorized = True