province = input('Enter the name of your home country: ')

if province == 'Alberta' or province == 'Nunavut':
    tax = 0.05
elif province == 'Ontario':
    tax = 0.13
else:
    tax = 0.15
print('Tax1 rate is: ' + str(tax))

if province in('Alberta', 'Nunavut', 'Yukon'):
    tax = 0.05
elif province == 'Ontario':
    tax = 0.13
else:
    tax = 0.15
print('Tax2 rate is: ' + str(tax))

country = input('Enter the name of your home country: ')
if country.upper() == 'KOREA':
    if province in('Alberta', 'Nunavut', 'Yukon'):
        tax = 0.05
    elif province == 'Ontario':
        tax = 0.13
    else:
        tax = 0.15
else:
    tax = 0.0
print('Tax3 rate is: ' + str(tax))