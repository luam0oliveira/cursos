def ordenada(lista):
    menor = lista[0]
    for x in lista:
        if(menor>x):
            return False
        menor = x
    return True