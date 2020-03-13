#include<stdio.h>
#include<malloc.h>

main(){

int n,m,*p,*q,i,x=0,y=0,z=0;

scanf("%d%d",&n,&m);

p=(int*)malloc(n*sizeof(int));
q=(int*)malloc(n*sizeof(int));

for(i=0;i<n;i++)
scanf("%d",&p[i]);

for(i=0;i<m;i++)
scanf("%d",&q[i]);

int min=p[0];
int max=p[0];

for(i=1;i<n;i++){
    if(min>p[i])
    min=p[i];
    if(max<p[i])
    max=p[i];
}

for(i=0;i<m;i++){
    if(min>q[i])
    min=q[i];
    if(max<q[i])
    max=q[i];
}
while(min<=max){
    x=0;
    y=0;
    for(i=0;i<n;i++){
        if(min%p[i]==0)
        x++;
    }
    for(i=0;i<m;i++){
        if(q[i]%min==0)
        y++;
    }
    if(x==n && y==m){
        z++;
    }
    min++;
}
printf("%d",z);
}

