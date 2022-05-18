function encriptarTexto(cadena){
  for(var i=0;i<5;i++){
      cadena = remplazar(cadena,diccionario[i][0],diccionario[i][1]);
  }
  return cadena
}