//Circular linked list
#include<stdio.h>
#include<malloc.h>
typedef struct list{
    int data;
    struct list *link;
}list;

void create(list*node);

main(){
    int x;
    scanf("%d",&x);
    while(x>0){    
    list *node=NULL;
    create(node);
    x--;
    }
}

void create(list*node){
    list *temp;
    int z,i,k,l,j=1;
    scanf("%d%d%d",&z,&k,&l);
    for(i=0;i<z;i++){
        temp=(list*)malloc(sizeof(int));
        temp->data=i+1;
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
    list *p=node,*q=node;
    while(p->link!=NULL && j!=l){
        p=p->link;
        j++;
    }
    while(p!=NULL){
        k--;
        q=p;
        p=p->link;
        if(k==0){
        printf("%d",q->data);
        break;
        }
    }

}

