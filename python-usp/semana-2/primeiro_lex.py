def primeiro_lex(lista):
    menor = lista[0]
    for x in lista:
        if x < menor:
            menor = x
    return menor