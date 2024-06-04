# 1)

def sum_two_smallest_numbers(numbers):
    sorted_num = sorted(numbers)       # ვქმნით ცვლადს სადც sorted ფუნქციით მასში არსებულ რიცხვებს ვალაგებთ ზრდის მიხედვით.
    return sorted_num[0] + sorted_num[1]     # და გამოგვაქვს მასში არსებული ყველაზე პატარა რიცხვები


# 2)

def max_multiple(divisor, bound):   
    multiple = []     # ვქმნით სიას სადაც შეგვაქვს ორი რიცვხი. 
    
    for num in range(divisor, bound + 1):      # და ვყოფთ მეორე რიცხვს პირველზე და თუ ის არ იყოფა მასზე მაშინ მათ შორის უმაღლეს რიცხვზე ვყოფთ.
        if num % divisor == 0:
            multiple.append(num)
            
    return max(multiple)


# 3)

def check_exam(arr1,arr2):
    score = 0
    
    for index in range(len(arr1)):           # პირველი შეყვანის მასივი არის გამოცდაზე სწორი პასუხების გასაღები, როგორიცაა ["a", "a", "b", "d"]. მეორე შეიცავს სტუდენტის მიერ წარდგენილ პასუხებს
        if arr1[index] == arr2[index]:    
            score += 4
        elif arr2[index] == "":
            score += 0
        else:
            score -= 1       # თუ სტუდენტმა შემოხაზა სწორი პასუხი მაშინ მას +4 ქულა ენიჭება, თუ მან არასწორი პასუხი შემოხაზა მას -1 ქულა ენიჭება, ხოლო თუ მან პასუხი არ შემოხაზა მაშინ მას არ ენიჭება არანაირი ქულა.
            
    if score < 0:    # თუ სტუდენტის მიერ მიღებული ქულა თუ 0_ზე დაბალია მაში ვაბრუნებთ 0 და დანარჩენ შემთხვევაში ვაბრუნებთ მიღებულ რიცხვს
        return 0
    else:
        return score
    

# 4)

def row_weights(array):
    team1 = 0
    team2 = 0     # გვაქვს ორი თიმი
    
    for index in range(len(array)):       # მათში ვაჯგუფებთ ნებისმიერ რიცხვებს
        if index % 2 == 0:
            team1 = team1 + array[index]
        else:
            team2 = team2 + array[index]     # თუ რიცხვი კენთ index_ზე იმყოფება ის ხვდება პირველ ტიმში ხოლო თუ ლუწ index_ზე არის მაშინ მეორე ტიმში.
            
    return [team1, team2]