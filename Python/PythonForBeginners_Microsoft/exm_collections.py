# Array

names = ['Susan', 'Christopher']
print(len(names))
names.insert(0, 'Bill')
print(names)
names.sort()
print(names)

print()

names1 = ['Susan', 'Christopher', 'Bill', 'Justin']
presenters = names1[1:3]

print(names1)
print(presenters)

print()

# Dictionaries

person = {'first': 'Christopher'}
person['last'] = 'Harrison'
print(person)
print(person['first'])

print()

# Demo
christopher = {}
christopher['first'] = 'Christopher'
christopher['last'] = 'Harrison'

susan = {}
susan['first'] = 'SusanIbach'
susan['last'] = 'Ibach'

people = []
people.append(christopher)
people.append(susan)
people.append({
    'first': 'Bill', 'last': 'Gates'
})

print(people)