#include<stdio.h>
#include<malloc.h>

int front=0;
int rear=0;

void enqueue(int *arr,int n);
void dequeue(int *arr,int n);
void peek(int *arr,int n);
void display(int *arr,int n);

main(){
	int n,*p,i=1,choice;
	printf("Enter the size of the queue : ");
	scanf("%d",&n);
	p=(int*)malloc(n*sizeof(int));
	while(i){
		printf("\n1.Enqueue\n2.Dequeue\n3.peek\n4.display\n5.End\nEnter your choice : ");
		scanf("%d",&choice);
		switch(choice){
			case 1:
				enqueue(p,n);
				break;
			case 2:
			    dequeue(p,n);
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

void enqueue(int *arr,int n){
	if(rear==n){
		printf("\nOverflow\n");
		return;
	}
	printf("\nEnter the data : ");
	scanf("%d",&arr[rear]);
	rear++;
}

void dequeue(int *arr,int n){
	if(rear==0){
		printf("\nUnderflow\n");
		return;
	}
	front++;
}

void peek(int *arr,int n){
	if(rear==0){
		printf("\nUnderflow\n");
		return;
	}
	printf("Front : %d",arr[front]);
}

void display(int *arr,int n){
	if(rear==0){
		printf("\nUnderflow\n");
		return;
	}
	int i=front;
	while(i<rear){
		printf("%d ",arr[i]);
		i++;
	}
}
