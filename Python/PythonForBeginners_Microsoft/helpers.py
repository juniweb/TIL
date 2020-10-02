# from colorama import init, Fore

def display(message, is_waring=False):
    if is_waring:
        # print(Fore.RED + message)
        print(message)
    else:
        # print(Fore.BLUE + message)
        print(message)