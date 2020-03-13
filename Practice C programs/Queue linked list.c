#include<stdio.h>
#include<malloc.h>

typedef struct list{
	int data;
	struct list *link;
}list;

list *front=NULL;
list *rear=NULL;

void enqueue();
void dequeue();
void display();
void peek();

main(){
	int i;
	while(1){
	printf("\n1 : Enqueue\n2 : Dequeue\n3 : Display\n4 : Peek\n5 : End\nEnter the code : ");
	scanf("%d",&i);
	
	if(i==5)
	break;
	switch(i){
		case 1:
			enqueue();
			break;
		case 2:
		    dequeue();
		    break;
		case 3:
		    display();
			break;
		case 4:
		    peek();
			break;	
	}
 }
}

void enqueue(){
	list *temp;
	temp=(list*)malloc(sizeof(list));
	printf("Enter the data : ");
	scanf("%d",&temp->data);
	temp->link=NULL;
	if(front==NULL){
		front=temp;
		rear=temp;
	}
	else{
		list *p=front;
		while(p->link!=NULL)
		p=p->link;
		p->link=temp;
		rear=temp;
	}
	display();
}

void dequeue(){
	if(front==NULL)
	printf("\nUnderflow\n");
	else{
		list *temp=front;
		front=temp->link;
		temp->link=NULL;
		free(temp);
	}
	display();
}

void display(){
	list *p=front;
	while(p!=NULL){
		printf("%d ",p->data);
		p=p->link;
	}
}

void peek(){
	printf("%d",front->data);
}
