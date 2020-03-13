#include<stdio.h>
#include<malloc.h>

int saveThePrisoner(int n, int m, int s) {

int t=s,x=m;

while(t<=n){
    x--;
    if(x==0){
        return t;
    }
    t++;
}
while(x>0){
if(t>n){
    t=0;
    while(t<=n){
        x--;
        if(x==0){
            return t;
        }
        t++;
    }
}
}
}

main(){

 int x,n,m,s,a,*p,i=0,z;
 scanf("%d",&x);
 z=x;
 p=(int*)malloc(x*sizeof(int));

 while(x>0){
   scanf("%d%d%d",&n,&m,&s);
   a=saveThePrisoner(n,m,s);
   p[i]=a;
   i++;
   x--;
 }
for(i=0;i<z;i++)
printf("%d\n",p[i]);


}


