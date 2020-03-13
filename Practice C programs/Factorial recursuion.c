#include<stdio.h>

long long int fact(int n){
	if(n==1)
	return 1;
	else
	return n*fact(n-1);
}

main(){
	long long int n,a;
	scanf("%lld",&n);
	a=fact(n);
	printf("%lld",a);
}
