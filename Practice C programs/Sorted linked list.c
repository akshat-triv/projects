#include<stdio.h>
#include<malloc.h>

typedef struct list{
	int data;
	struct list *link;
}list;

list*node=NULL;
list*node2=NULL;
list*mer=NULL;

void create();
void create2();
void display(list *node);
void merge(list *p,list *q);

main(){
	create();
	create2();
	list *p=node;
	list *q=node2;
	merge(p,q);
}

void create(){
	int x,i;
	printf("Enter the no. of Nodes present : ");
	scanf("%d",&x);
	for(i=0;i<x;i++){
		list*temp;
		temp=(list*)malloc(sizeof(int));
		printf("Enter the data: ");
		scanf("%d",&temp->data);
		temp->link=NULL;
		if(node==NULL)
		 node=temp;
		else{
			list*p,*q;
			q=node;
			p=node;
			if(temp->data>p->data){
			while(temp->data>p->data){
				q=p;
				p=p->link;
				if(p==NULL)
				break;
			}
			q->link=temp;
			if(p!=node && p!=NULL)
			temp->link=p;
			else
			temp->link=NULL;
			}
			else{
				temp->link=q;
				node=temp;
			}
		}
		}
		display(node);
	}
	
void create2(){
	int x,i;
	printf("\nEnter the no. of Nodes present : ");
	scanf("%d",&x);
	for(i=0;i<x;i++){
		list*temp;
		temp=(list*)malloc(sizeof(int));
		printf("Enter the data: ");
		scanf("%d",&temp->data);
		temp->link=NULL;
		if(node2==NULL)
		 node2=temp;
		else{
			list*p,*q;
			q=node2;
			p=node2;
			if(temp->data>p->data){
			while(temp->data>p->data){
				q=p;
				p=p->link;
				if(p==NULL)
				break;
			}
			q->link=temp;
			if(p!=node2 && p!=NULL)
			temp->link=p;
			else
			temp->link=NULL;
			}
			else{
				temp->link=q;
				node2=temp;
			}
		}
		}
		display(node2);
	}
	
void merge(list *p,list *q){
	if(p->data>q->data){
		list *temp;
		list *temp2;
		temp=(list*)malloc(sizeof(int));
		temp2=(list*)malloc(sizeof(int));
		temp->data=q->data;
		temp->link=NULL;
		temp2->data=p->data;
		temp2->link=NULL;
		if(mer==NULL){
		temp->link=temp2;
		mer=temp;
		
	}
		else{
			list*d,*e;
			d=mer;
			e=mer;
			if(temp->data>d->data){
			while(temp->data>d->data){
				e=d;
				d=d->link;
				if(d==NULL)
				break;
			}
			if(d!=mer && d!=NULL){
			if(temp2->data>d->data){
				list *y=d;
				list *z=e;
				while(temp2->data>y->data){
					z=y;
					y=y->link;
					if(y==NULL)
					break;
				}
				z->link=temp2;
				if(y!=mer && y!=NULL)
				temp2->link=y;
				else
				temp2->link=NULL;
				e->link=temp;
				temp->link=d;
			}
			else{
				e->link=temp;
				temp->link=temp2;
				temp2->link=d;
			}
		}
			else{
			temp->link=temp2;
			temp2->link=NULL;
			}
		}
			else{
				temp->link=d;
				mer=temp;
				if(temp2->data>d->data){
				list *y=d;
				list *z=e;
				while(temp2->data>y->data){
					z=y;
					y=y->link;
					if(y==NULL)
					break;
				}
				z->link=temp2;
				if(y!=mer && y!=NULL)
				temp2->link=y;
				else
				temp2->link=NULL;
				
			}
		}
	}
}
	else{
		list *temp;
		list *temp2;
		temp=(list*)malloc(sizeof(int));
		temp2=(list*)malloc(sizeof(int));
		temp->data=p->data;
		temp->link=NULL;
		temp2->data=q->data;
		temp2->link=NULL;
		if(mer==NULL){
		temp->link=temp2;
		mer=temp;
		
	}
		else{
			list*d,*e;
			d=mer;
			e=mer;
			if(temp->data>d->data){
			while(temp->data>d->data){
				e=d;
				d=d->link;
				if(d==NULL)
				break;
			}
			if(d!=mer && d!=NULL){
			if(temp2->data>d->data){
				list *y=d;
				list *z=e;
				while(temp2->data>y->data){
					z=y;
					y=y->link;
					if(y==NULL)
					break;
				}
				z->link=temp2;
				if(y!=mer && y!=NULL)
				temp2->link=y;
				else
				temp2->link=NULL;
				e->link=temp;
				temp->link=d;
			}
			else{
				e->link=temp;
				temp->link=temp2;
				temp2->link=d;
			}
		}
			else{
			temp->link=temp2;
			temp2->link=NULL;
			}
			}
			else{
				temp->link=d;
				mer=temp;
				if(temp2->data>d->data){
				list *y=d;
				list *z=e;
				while(temp2->data>y->data){
					z=y;
					y=y->link;
					if(y==NULL)
					break;
				}
				z->link=temp2;
				if(y!=mer && y!=NULL)
				temp2->link=y;
				else
				temp2->link=NULL;
				
			}
		}
}
	p=p->link;
	q=q->link;
	if(p!=NULL && q!=NULL)
	merge(p,q);
	else
	display(mer);
}
}

void display(list*a){
	list *p;
	p=a;
	printf("\nLinked list : \n");
	while(p->link!=NULL){
		printf("%d ",p->data);
		p=p->link;
	}
	printf("%d",p->data);
}
