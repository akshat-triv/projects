#include<stdio.h>

main(){
	long long int n,a=1;
	scanf("%lld",&n);
	while(n>0){
		a=a*n;
		n--;
	}
	printf("%lld",a);
}
