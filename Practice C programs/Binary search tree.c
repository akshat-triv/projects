#include<stdio.h>
#include<malloc.h>

typedef struct tree{
	int data;
	struct tree *left;
	struct tree *right;
}tree;

typedef struct queue{
	int data;
	struct queue *link;
}queue;

tree *root=NULL;
queue *front=NULL;
queue *rear=NULL;

queue *list=NULL;

void q_create(tree *node);
void push(tree *node);
void q_del();
void insert();
void display();
void preorder(tree *node);
void inorder(tree *node); 
void postorder(tree *node);

main(){
	int x,i=1;
	while(i){
		printf("\n1. Insert\n2. Preorder Traversal\n3. Inorder Traversal\n4. Postorder traversal\n5. Level order traversal\n6. End\nEnter : ");
		scanf("%d",&x);
		switch(x){
			case 1:
				insert();
				break;
			case 2:
			    preorder(root);
				break;
			case 3:
			    inorder(root);
				break;
			case 4:
			    postorder(root);
				break;
			case 5:
			    q_create(root);
			    display();
				break;	
			case 6:
			    i=0;
				break;				
		}
	}
}

void insert(){
	tree *temp;
	temp=(tree*)malloc(sizeof(tree));
	printf("\nEnter the Data : ");
	scanf("%d",&temp->data);
	temp->left=NULL;
	temp->right=NULL;
	if(root==NULL)
	root=temp;
	else{
		tree *p=root;
		while(p!=NULL){
		if(p->data>temp->data){
			if(p->left==NULL){
			p->left=temp;
			break;
			}
			else
			p=p->left;
		}
		else if(p->data<temp->data){
			if(p->right==NULL){
			p->right=temp;
			break;
			}
			else
			p=p->right;
		}
	}
}
}

void preorder(tree *node){
	if(node==NULL)
	return;
	printf("%d ",node->data);
    preorder(node->left);
	preorder(node->right);
}

void inorder(tree *node){
	if(node==NULL)
	return;
	inorder(node->left);
	printf("%d ",node->data);
	inorder(node->right);
}

void postorder(tree *node){
	if(node==NULL)
	return;
	postorder(node->left);
	postorder(node->right);
	printf("%d ",node->data);
}

void q_create(tree *node){
	queue *temp;
	temp=(queue*)malloc(sizeof(queue));
	temp->data=node->data;
	temp->link=NULL;
	if(front==NULL){
		front=temp;
		rear=temp;
	}
	else{
		queue *p=rear;
		p->link=temp;
	}
	while(front!=NULL){
		q_del();
		push(node->left);
		push(node->right);
	}
}

void push(tree *node){
	queue *q;
	queue *temp;
	temp=(queue*)malloc(sizeof(queue));
	temp->data=node->data;
	temp->link=NULL;
	q->link=temp;
	rear=temp;
}
void q_del(){
	queue *temp;
	queue *z=front;
	temp=(queue*)malloc(sizeof(queue));
	temp->data=front->data;
	temp->link=NULL;
	if(list==NULL){
		list=temp;
	}
	else{
		queue *p=list;
		while(p->link!=NULL)
		p=p->link;
		p->link=temp;
	}
	front=z->link;
	z->link=NULL;
	free(z);
	
}

void display(){
	queue *p=list;
	while(p!=NULL){
		printf("%d ",p->data);
		p=p->link;
	}
	list=NULL;
}
