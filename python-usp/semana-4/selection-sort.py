def ordena(lista):
    for x in range(len(lista)):
        for y in range(len(lista)):
            if(lista[y]>lista[x]):
                lista[x], lista[y] = lista[y], lista[x]
    return lista   