price = input('how much did you pay? ')
if float(price) >= 1.00:
    tax = .07
else:
    tax = 0
print('Tax rate is: ' + str(tax))

country = input('Enter the name of your home country: ')
if country.lower() == 'korea':
    print('Oh look a Korean')
else:
    print('You are not from Korea')

