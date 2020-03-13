#include<stdio.h>
#include<malloc.h>

main(){

int i,j=0,*p,*q,n;

scanf("%d",&n);

p=(int*)malloc(n*(sizeof(int)));
q=(int*)malloc(n*(sizeof(int)));

for(i=0;i<n;i++){
scanf("%d",&p[i]);

}
int k=0;

for(i=0;i<n;i++){

if(p[i]>=38){
    for(j=0;p[i]%5!=0;j++){
        p[i]=p[i]+1;
}
    if(j<=2){
     q[k]=p[i];
     k++;
    }
    else{
        q[k]=p[i]-j;
        k++;
    }
}
else{
    q[k]=p[i];
    k++;
}
}

for(i=0;i<n;i++){
    printf("%d\n",q[i]);
}

}
