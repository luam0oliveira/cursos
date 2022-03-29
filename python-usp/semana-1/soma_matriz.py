def soma_matrizes(m1,m2):
    if (len(m1) == len(m2) and len(m1[0]) == len(m2[0])):
        matrix = []
        for i in range(len(m1)):
            line = []
            for j in range(len(m1[0])):
                line.append(m1[i][j]+m2[i][j])
            matrix.append(line)
        return matrix
    else:
        return False
        
