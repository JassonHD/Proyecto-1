//Definir Matriz
var matriz1 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
var matriz2 = [[12, 11, 10, 9], [8, 7, 6, 5], [4, 3, 2, 1]]
contador=0
	for (var i = 0; i <=3; i++) {
   	for (var j =0; j <=3; j++) {
 	r=matriz1[i][j]
	document.write(" La posicion es " +r);
	contador=contador+1
   	}
}
//r2=i+j
document.write(" los ciclos fueron: "+contador);