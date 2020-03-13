#include<stdio.h>
#include<malloc.h>

main(){

int n,*p,*q,i,k,m,j,max;

scanf("%d",&n);

p=(int*)malloc(n*sizeof(int));


for(i=0;i<n;i++)
scanf("%d",&p[i]);

m=p[0];
for(i=1;i<n;i++){
    if(m<p[i])
    m=p[i];
}

q=(int*)malloc(m*sizeof(int));

for(i=0;i<m;i++){
 k=0;
for(j=0;j<n;j++){
if(p[j]==i)
k++;
}
q[i]=k;
}

max=q[0];
for(i=1;i<m;i++){
    if(max<q[i]){
    max=i;

}
}
if(q[max+1]>q[max-1]){
printf("%d",q[max]+q[max+1]);
}
else{
printf("%d",q[max]+q[max-1]);
}






}
