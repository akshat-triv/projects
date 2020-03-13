#include<stdio.h>
#include<malloc.h>

int front=0;
int rear=0;

void enqueue(int *arr,int n);
void dequeue(int *arr,int n);
void display(int *arr,int n);
void peek(int *arr);

main(){
	int *p,n,i;
	printf("Enter the size : ");
	scanf("%d",&n);
	p=(int*)malloc(n*sizeof(int));
	while(1){
		printf("\n1 : Enqueue\n2 : Dequeue\n3 : Display\n4 : Peek\n5 : End\nEnter the code : ");
	    scanf("%d",&i);
	    if(i==5)
	    break;
	    switch(i){
	    	case 1:
			  enqueue(p,n);
			  break;
		    case 2:
		      dequeue(p,n);
		      break;
		    case 3:
		      display(p,n);
			  break;
		    case 4:
		      peek(p);
			  break;
		}
	}
}

void enqueue(int *arr,int n){
	if(front==0 && rear==n)
	printf("Overflow\n");
	else if(front==rear && front!=0)
	printf("Overflow\n");
	else{
	  int x;
	  printf("Enter the data :");
	  scanf("%d",&x);
	  if(rear!=n){
	  	arr[rear]=x;
	  	rear++;
	  }
	  else{
	  	rear=0;
	  	arr[rear]=x;
	  	rear++;
	  }
   display(arr,n);
   }
}

void display(int *arr,int n){
	if(front==0 && rear==0)
	printf("List is empty\n");
	else{
		if(rear>front){
			int i=front;
			while(i<rear){
				printf("%d ",arr[i]);
				i++;
			}
		}
		else{
			int j=front;
			while(j<n){
				printf("%d ",arr[j]);
				j++;
			}
			j=0;
			while(j<rear){
				printf("%d ",arr[j]);
				j++;
			}
		}
	}
}

void dequeue(int *arr,int n){
	if(front==0 && rear==0)
	printf("Underflow\n");
	else{
		front++;
		display(arr,n);
	}
}

void peek(int *arr){
	printf("%d",arr[front]);
}
