#include<stdio.h>
#include<malloc.h>

int function(int beg,int mid,int end,int *p,int a){
	if(p[mid]==a){
		return mid;
	}
	else if(p[mid]<a){
		beg=mid;
		mid=(beg+end)/2;
		return function(beg,mid,end,p,a);
	}
	else if(p[mid]>a){
		end=mid;
		mid=(beg+end)/2;
		return function(beg,mid,end,p,a);
	}
}

main(){
	int *p,n,a,x,i;
	scanf("%d",&n);
	
	p=(int*)malloc(n*sizeof(int));
	
	for(i=0;i<n;i++)
	scanf("%d",&p[i]);
	
	scanf("%d",&a);
	
	x=function(0,(n-1)/2,n-1,p,a);
	
	printf("Element is present at %d index and %d position",x,x+1);
	
}
