#include<stdio.h>

main(){

long long int n,p,i,k=0,l=0;

scanf("%lld",&n);
scanf("%lld",&p);

for(i=1;i<=n;i=i+2){
if(p%2==0 && p<n)
p++;
if(i==p){
    break;
}
k++;
}
for(i=n;i>0;i=i-2){
if(i==p)
break;
if(p%2==0)
p++;
if(i==p)
break;
l++;
}
if(k>l)
printf("%lld",l);
else
printf("%lld",k);

}
