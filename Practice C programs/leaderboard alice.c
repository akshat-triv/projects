#include<stdio.h>
#include<malloc.h>

main(){

 long long int n,*p,m,*q,i,j,k=0;
 scanf("%lld",&n);
 p=(long long int*)malloc(n*sizeof(long long int));
 for(i=0;i<n;i++)
 scanf("%lld",&p[i]);
 scanf("%lld",&m);
 q=(long long int*)malloc(m*sizeof(long long int));
 for(i=0;i<m;i++)
 scanf("%lld",&q[i]);

 for(i=0;i<m;i++){
     for(j=0,k=0;j<n;j++){
         if(q[i]<p[j]&&p[j]!=p[j+1])
         k++;
     }
     printf("%lld\n",k+1);
 }


}
