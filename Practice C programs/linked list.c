#include<stdio.h>
#include<malloc.h>

typedef struct list{
	int data;
	struct list *link;
}list;

list *node=NULL;

list * create(int n);
void display(list *node);
void search(list *node);
void Addn(list *node);
void Addl(list *node);
void Adds(list *node);
void Delete(list *node);

main(){
	int n,i;
	
	printf("Enter the no. of nodes you want in your linked list : ");
	scanf("%d",&n);
	
	node=create(n);
	display(node);
	
	printf("\n\n1 : Search\n2 : Add new node at the beginning\n3 : Add new node at last\n4 : Add new node at specific location\n5 : Delete a node");
	printf("\nEnter the code for the operation you want to perform : ");
	scanf("%d",&i);
	
	switch(i){
	
		case 1:
			search(node);
			break;
		case 2:
		    Addn(node);
			break;
		case 3:
		    Addl(node);
		    break;
		case 4:
		    Adds(node);
			break;
		case 5:
		    Delete(node);
			break;				
        default:
		    printf("Wrong input");
			break;	
		}
   		
}

list * create(int n){
	int i=0;
	list *p=NULL;
	list *temp=NULL;
	
	for(i=0;i<n;i++){
		
		temp=(list *)malloc(sizeof(int));
		printf("Enter the data of the node : ");
		scanf("%d",&(temp->data));
		temp->link=NULL;
		
		if(node==NULL){
			node=temp;
		}
		else{
			p=node;
			while(p->link!=NULL)
			p = p->link;
			p->link=temp;
			
		}
	}
	return node;
}

void display(list *node){
	list *p;
	p=node;
	printf("\nLinked list : \n");
	while(p->link!=NULL){
		printf("%d ",p->data);
		p=p->link;
	}
	printf("%d",p->data);
}

void search(list *node){
	int x,k=0;
	printf("Enter the element you want to search : ");
	scanf("%d",&x);
	list *p;
	p=node;
	while(p->link!=NULL){
		k++;
		if(p->data==x){
			printf("Element is present at %d node",k);
			break;
		}
		p=p->link;
	}
	if(p->data==x)
	printf("Element is in the last node");
}
void Addn(list *node){
	list *temp;
	temp=(list *)malloc(sizeof(list));
	printf("Enter the data of new node : ");
	scanf("%d",&temp->data);
	temp->link=node;
	node=temp;
	printf("new node : ");
	display(node);
}
void Addl(list *node){
	list *temp;
	list *p;
	temp=(list *)malloc(sizeof(list));
    printf("Enter the data of new node : ");
	scanf("%d",&temp->data);
	temp->link=NULL;
	p=node;
	while(p->link!=NULL)
	p=p->link;
	p->link=temp;
	display(node);
}
void Adds(list *node){
	int k,x;
	list *p;
	p=node;
	printf("Enter the no. of the node you want the data to be in : ");
	scanf("%d",&x);
	while(p!=NULL){
		k++;
		p=p->link;
		if(x==(k+2)){
			break;
		}
	}
	list *temp;
	list *q;
	q=p->link;
	temp=(list*)malloc(sizeof(list));
	printf("Enter the data of the new node : ");
	scanf("%d",&temp->data);
	p->link=temp;
	temp->link=q;
	display(node);
}

void Delete(list *node){
	int x,k;
	printf("Enter the no. of the node you want to delete : ");
	scanf("%d",&x);
	list *p;
	list *q;
	list *r;
	p=node;
	while(p->link!=NULL){
		k++;
		p=p->link;
		if(x==(k+2))
		r=p;
		if(x==(k+1)){
			break;
		}
	}
	q=p->link;
	r->link=q;
	p=NULL;
	free(p);
	printf("New list : ");
	display(node);
}
