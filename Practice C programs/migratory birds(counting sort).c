#include<stdio.h>
#include<malloc.h>

main(){

int n,*p,i,x=0,j,*q,k=0,max;

scanf("%d",&n);

p=(int*)malloc(n*sizeof(int));

for(i=0;i<n;i++)
scanf("%d",&p[i]);

j=p[0];

for(i=1;i<n;i++){
    if(j<p[i]){
        j=p[i];
    }
}

q=(int*)malloc((j+1)*sizeof(int));

for(i=0;i<(j+1);i++){
 for(k=0,x=0;k<n;k++){
     if(p[k]==i)
     x++;
 }
q[i]=x;
}
max=q[0];

for(i=1;i<(j+1);i++){
if(max<q[i])
max=q[i];
}
for(i=0;i<(j+1);i++){
    if(max==q[i]){
    printf("%d",i);
    break;
    }
}

}

