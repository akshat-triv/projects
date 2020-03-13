#include<stdio.h>
#include<malloc.h>

main(){

long long int i,s,t,a,b,m,n,p[100000],q[100000],x=0,y=0;

scanf("%lld%lld",&s,&t);
scanf("%lld%lld",&a,&b);
scanf("%lld%lld",&m,&n);

//p = (long long int*)calloc(m,sizeof(long long int));
//q = (long long int*)calloc(n,sizeof(long long int));

for(i=0;i<m;i++)
scanf("%lld",&p[i]);

for(i=0;i<n;i++)
scanf("%lld",&q[i]);

for(i=0;i<m;i++){
    p[i]=p[i]+a;
    if(p[i]>=s && p[i]<=t)
    x++;
}
for(i=0;i<m;i++){
    q[i]=q[i]+b;
    if(q[i]>=s && q[i]<=t)
    y++;
}

printf("%lld\n%lld",x,y);







}
