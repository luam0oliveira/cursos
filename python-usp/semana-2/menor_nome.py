def menor_nome(nomes):
    menor = nomes[0]
    for x in nomes:
        if len(x.strip())<len(menor):
            menor = x.strip()
    return menor.capitalize()
