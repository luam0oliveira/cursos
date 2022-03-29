def maiusculas(string):
    maiusculas = ''
    for x in string:
        if int(ord(x)) >= 65 and int(ord(x)) <= 90:
            maiusculas+=x
    return maiusculas