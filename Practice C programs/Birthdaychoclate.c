#include<stdio.h>
#include<malloc.h>

main(){

int j=0,k=0,n,*p,d,m,i,x=1,sum=0;

scanf("%d",&n);
p=(int*)malloc(n*sizeof(int));

for(i=0;i<n;i++)
scanf("%d",&p[i]);

scanf("%d%d",&d,&m);

for(i=0;i<n;i++){
sum=p[i];
for(j=x;j<m;j++){
    sum=sum+p[j];
}
if(sum==d)
k++;

x++;
m++;
}

printf("%d",k);

}

