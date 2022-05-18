function desencriptarTexto(cadena){
  for(var i=0;i<5;i++){
      cadena = remplazar(cadena,diccionario[i][1],diccionario[i][0]);
  }
  return cadena;
}