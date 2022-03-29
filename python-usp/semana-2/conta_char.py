def conta_letras(frase, contar="vogais"):
    cont = 0
    frase = frase.replace(" ","").lower()
    vogais = ['a','e','i','o','u']
    if(contar.lower() == "vogais"):
        for x in frase:
            if x in vogais:
                cont+=1
    else:
        for x in frase:
            if x not in vogais :
                cont+=1
    return cont
