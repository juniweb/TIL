import json

# Create a dictionary object
person_dict = {'first': 'Heejun', 'last': 'Lim'}

# Add additional key pairs as needed to dictionary
person_dict['City'] = 'Seoul'

# Convert dictionary to JSON object
person_json = json.dumps(person_dict)

# Print JSON object
print(person_json)

# ===================================================

# Create staff dictionary which assigns a person to a role
staff_dict = {}
staff_dict['Program Manager'] = person_dict

# Convert dictionary to JSON object
staff_json = json.dumps(staff_dict)

# Print JSON object
print(staff_json)

# ===================================================

# Create list object of programming languages
languages_list = ['CSharp', 'Python', 'Javascript']
# Add list to dictionary
person_dict['languages'] = languages_list

# Convert dictionary to JSON object
person_json = json.dumps(person_dict)

# Print JSON object
print(person_json)
