# Syntax error
# if x == y
#   print('x is equals y')


# Runtime error
x = 42
y = 0

try:
    print(x / y)
except ZeroDivisionError as e:
    # Optionally, log e something
    print('Sorry, something went wrong')
except:
    print('Something really went wrong')
finally:
    print('This always runs on success or failure')


# Logic error
x1 = 206
y1 = 42

if x1 < y1:
    print(str(x) + ' is greater then ' + str(y))