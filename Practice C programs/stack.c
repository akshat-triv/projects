//stack using array
#include<stdio.h>
#include<malloc.h>

void push(int *arr,int n);
void pop(int *arr,int n);
void peek(int *arr,int n);
void display(int *arr,int n);

int top=0;

main(){
	int *p,n,i,choice;
	printf("Enter the size : ");
	scanf("%d",&n);
	
	p=(int*)malloc(n*sizeof(int));
	i=1;
	
	while(i){
		printf("\n1. Push\n2. Pop\n3. Peek\n4. Display\n5. End\nEnter your choice : ");
		scanf("%d",&choice);
		switch(choice){
			case 1 :
				push(p,n);
				break;
			case 2:  
			 	pop(p,n);
			    break;
			case 3:
			    peek(p,n);
				break;
			case 4:
			    display(p,n);
				break;
			case 5:
			     i=0;
				 break;				
		}
	}
}

void push(int *arr,int n){
	if(top==n){
		printf("\nOverflow\n");
		return;
	}
	printf("Enter the data : ");
	scanf("%d",&arr[top]);
	top++;
}

void pop(int *arr,int n){
	if(top==0){
		printf("\nUnderflow\n");
		return;
	}
	top--;
}

void peek(int *arr,int n){
	if(top==0){
		printf("\nUnderflow\n");
		return;
	}
	printf("%d",arr[top-1]);
}

void display(int *arr,int n){
	if(top==0){
		printf("\nUnderflow\n");
		return;
	}
	int i=top-1;
	while(i>=0){
		printf("%d ",arr[i]);
		i--;
	}
}
