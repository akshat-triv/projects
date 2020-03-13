#include<stdio.h>
#include<malloc.h>

main(){

int arr[3][3],i,j,*p,z=0,sum=0,sumc=0;

for(i=0;i<3;i++)
for(j=0;j<3;j++)
scanf("%d",&arr[i][j]);

p=(int*)malloc(8*sizeof(int));

for(i=0;i<3;i++){
for(j=0;j<3;j++){
sum=sum+arr[i][j];
}
p[z]=sum;
sum=0;
z++;
}



for(j=0;j<3;j++){
for(i=0;i<3;i++){
sumc=sumc+arr[i][j];
}
p[z]=sumc;
sumc=0;
z++;
}
p[z]=arr[0][0]+arr[1][1]+arr[2][2];
z++;
p[z]=arr[2][0]+arr[1][1]+arr[0][2];
for(i=0;i<8;i++)
printf("%d ",p[i]); 
int max,temp1,temp2,temp3;
max=p[0];
for(i=0;i<8;i++){
    if(max<p[i])
    max=p[i];
}
printf("\n%d\n",max);

if(p[0]!=max){
   temp1=max-p[0];
   arr[0][0]=arr[0][0]+temp1;
}
if(p[1]!=max){
    temp2=max-p[1];
    arr[1][2]=arr[1][2]+temp2;
}
if(p[2]!=max){
    temp3=max-p[2];
    arr[2][1]=arr[2][1]+temp1;
}

for(i=0;i<3;i++){
for(j=0;j<3;j++)
printf("%d ",arr[i][j]);
printf("\n");
}
}


