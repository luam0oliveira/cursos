def imprime_matriz(matrix):
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            if(j!=len(matrix[0])-1):
                print(matrix[i][j], end=' ')
            else:
                print(matrix[i][j])
