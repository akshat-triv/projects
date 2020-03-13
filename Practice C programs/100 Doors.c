#include<stdio.h>

main(){
	int arr[1001],i,j;
	
	for(i=1;i<=1001;i++)
	arr[i]=0;
	
	for(i=1;i<=1001;i++){
		for(j=i;j<=1001;j++){
			if(j%i==0){
				if(arr[j]==0)
				arr[j]=1;
				else
				arr[j]=0;
			}
		}
	}
	for(i=1;i<=1001;i++)
	if(arr[i]==1)
	printf("%d ",i);
}
