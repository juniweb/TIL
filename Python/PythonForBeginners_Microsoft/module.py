# import module as namespace
import helpers
helpers.display('Not a warning - import module as namespace')

# import all into current namespace
from helpers import *
display('Not a warning - import all into current namespace')

# import specific items into current namespace
from helpers import display
display('Not a warning - import specific items into current namespace')