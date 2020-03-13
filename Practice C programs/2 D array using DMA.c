#include<stdio.h>
#include<malloc.h>

main(){
	
	int *p,n,m,i,j;
	
	scanf("%d%d",&n,&m);
	
	p = (int*)malloc(n*m*sizeof(int));
	
	for(i=0;i<n;i++)
	for(j=0;j<m;j++)
	scanf("%d",(p + i*m + j));
	
	printf("Entered Array : \n");
	for(i=0;i<n;i++){
	
	for(j=0;j<m;j++){	
	printf("%d ",*(p + i*m + j));
}
printf("\n");
}
}
