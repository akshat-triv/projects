#include<stdio.h>
#include<malloc.h>

typedef struct list{
    int data;
    struct list *link; 
}list;

list *node=NULL;

void create(int n);
void dup();
void display();

main(){
    
    int n;
    scanf("%d",&n);    
    create(n); 
	dup();       
}

void create(int n){
    list *temp;
    int i;
    for(i=0;i<n;i++){
    temp=(list *)malloc(sizeof(list));
    scanf("%d",&temp->data);
    temp->link=NULL;
    if(node==NULL)
    node=temp;
    else{
        list *p;
        p=node;
        while(p->link!=NULL)
        p=p->link;
        p->link=temp;
    }
}
display();
}

void display(){
	list *p;
	p=node;
	printf("Linked list : ");
	while(p!=NULL){
		printf("%d ",p->data);
		p=p->link;
	}
}

void dup(){
	list *p,*q,*temp;
	p=node;
	printf("\nAfter removing duplicate nodes\n");
	while(p!=NULL){
		q=p->link;
		temp=p;
		while(q!=NULL){
			if(p->data==q->data){
				temp->link=q->link;
				q->link=NULL;
			}
			q=q->link;
			temp=temp->link;
		}
		p=p->link;
	}
	display();
}

