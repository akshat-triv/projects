//Circular linked list
#include<stdio.h>
#include<malloc.h>
typedef struct list{
	int data;
	struct list *link;
}list;

list *node=NULL;
void create();
void Delete();
void insert();
void concatenate();
void display();
void dice();

main(){	
	create();
	dice();
	insert();
	Delete();
	concatenate();
}

void create(){
	list *temp;
	int x,i;
	printf("Enter the no. of nodes you want in your linked list : ");
	scanf("%d",&x);
	for(i=0;i<x;i++){
		temp=(list*)malloc(sizeof(int));
		printf("Enter the data : ");
		scanf("%d",&temp->data);
		temp->link=NULL;
		if(node==NULL){
			temp->link=temp;
			node=temp;
		}
		else{
			list*p;
			p=node;
			temp->link=p->link;
			p->link=temp;
			node=temp;
		}
	}
	display();
}

void display(){
	list *p;
	p=node;
	do{
		p=p->link;
		printf("%d ",p->data);
	}while(p!=node);
}

void dice(){
	list *p=node;
	int x;
	printf("\nEnter :");
	scanf("%d",&x);
	while(x!=0){
		p=p->link;
		x--;
	}
	switch(p->data){
		case 1:
			printf("MIT lectures");
			break;
		case 2:
		    printf("Data Structures");
			break;
		case 3:
		    printf("Javascript");
			break;
		case 4:
		    printf("COA");
			break;
		case 5:
		    printf("Discrete");
			break;
		case 6:
		    printf("Electronics");
			break;					
	}
}

void insert(){
	list *p,*q;
	q=node;
	p=(list*)malloc(sizeof(int));
	printf("\nEnter the data for node at beginning : ");
	scanf("%d",&p->data);
	p->link=q->link;
	q->link=p;
	display();
}

void Delete(){
//You Know....	
}

void concatenate(){
//You Know......
}

