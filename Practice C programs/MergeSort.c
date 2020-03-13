#include<stdio.h>
#include<malloc.h>

void merge(int *p,int l,int m,int h){
	
	int n1,n2,i,j,k;
	n1= m-l+1;          //finding the size of 1st sorted array
	n2=h-m;             //finding the size of 2nd sorted array
	int a1[n1],a2[n2];  // creating two temporary arrays
	
	for(i=0;i<n1;i++)   // copying the sorted data from original array to sorted arrays
	a1[i]=p[l+i];
	
	for(i=0;i<n2;i++)
	a2[i]=p[m+1+i];
	
	i=0;
	j=0;
	k=l;
	
	while(i<n1 && j<n2){
		if(a1[i]<a2[j]){
			p[k]=a1[i];
			k++;
			i++;
		}
		else{
			p[k]=a2[j];
			k++;
			j++;
		}
	}
	
	while(i!=n1){
		p[k]=a1[i];
		i++;
	}
	
	while(j!=n2){
		p[k]=a2[j];
		j++;
	}
	
}

void mergeSort(int *p,int l,int h){
	if(l==h)
	return;
	
	int m;
	m=l+(h-l)/2;
	mergeSort(p,l,m);
	mergeSort(p,m+1,h);
	merge(p,l,m,h);
	
}


main(){
	int *p,n,i;
	
	printf("Enter the size of the array : ");
	scanf("%d",&n);
	
	p=(int*)malloc(n*sizeof(int));
	
	printf("Enter the array : ");
	
	for(i=0;i<n;i++)
	scanf("%d",&p[i]);
	
	mergeSort(p,0,n);
	
	printf("Sorted array : ");
	for(i=0;i<n;i++)
	printf("%d ",p[i]);
}
