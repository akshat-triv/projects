#include<stdio.h>
#include<malloc.h>

main(){

long long int b,i,j,n,m,x,z=0,k=0,a;
int *p,*q,*r;

scanf("%lld%lld%lld",&b,&n,&m);
x=n*m;
p=(int*)malloc(n*sizeof(long long int));
q=(int*)malloc(m*sizeof(long long int));
r=(int*)malloc(x*sizeof(long long int));

for(i=0;i<n;i++)
scanf("%d",&p[i]);

for(i=0;i<m;i++)
scanf("%d",&q[i]);

for(i=0;i<n;i++){
    for(j=0;j<m;j++){
       r[z]=b-(p[i]+q[j]);
       z++;
    }
}
for(i=0;i<x;i++)
printf("%d ",r[i]);
}
