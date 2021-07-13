function middleMe(N, X, Y){
    if (N%2==0) return Y.repeat(N/2)+X+Y.repeat(N/2)
    return X
  }