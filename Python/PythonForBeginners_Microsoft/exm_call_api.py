
# Use the requests library to simplify making a REST API call from Python
import requests

# We will need the json library to read the data passed back
# by the web service
import json

# Sample REST API address
users_address = "https://reqres.in/api/users"

address = users_address + "?page=2"

headers = {
    'content-type': 'application/json'
}

parameters = {}

response = requests.get(address, headers=headers, params=parameters)

response.raise_for_status()

results = response.json()

print(json.dumps(results['data']))
print(json.dumps(results['data'][0]))
print(json.dumps(results['data'][0]['email']))