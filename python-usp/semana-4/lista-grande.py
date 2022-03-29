from random import random

def lista_grande(n):
    lista = []
    for x in range(n):
        lista.append(int(random()*10))
    return lista