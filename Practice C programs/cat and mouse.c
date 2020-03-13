#include<malloc.h>
#include<stdio.h>

char* catAndMouse(int x, int y, int z) {

int a,b;
char *p;

p=(char *)malloc(7*sizeof(char));

a=z-x;
b=z-y;

if(a<0)
a=a*(-1);

if(b<0)
b=b*(-1);

if(a<b){
    p="Cat A";
    return (char*)p;
}
else if(b<a){
    p="Cat B";
    return (char*)p;
}
else if(b==a){
    p="Mouse C";
    return (char*)p;
}
}

main(){
	int a,*arr,i=0;
	arr=(int*)malloc(a*sizeof(int));
	scanf("%d",&a);
	while(a>0){
	int x,y,z;
	scanf("%d%d%d",&x,&y,&z);
	char*p=catAndMouse(x,y,z);
    if(p=="Cat A"){
    arr[i]=1;
    i++;
}
    if(p=="Cat B"){
    arr[i]=2;
    i++;
}
    if(p=="Mouse C"){
    arr[i]=3;
    i++;
}
	a--;
}
for(i=0;i<a;i++){
	if(arr[i]==1){
	printf("Cat A");
	}
	if(arr[i]==2){
	printf("Cat B");
	}
	if(arr[i]==3){
	printf("Mouse C");
	}
}
}
