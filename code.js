class sinx{
    constructor(x,n){
        this.x=x;
        this.n=n;
        this.code = `
        <pre style="color:green;">
 #include &lt;stdio.h&gt;
 #include &lt;math.h&gt;

 int main()
{   
    int n;
   double x;
   printf("Enter the value of x");
   scanf("%lf",&x);
    printf("Enter the value of n");
    scanf("%d",&n);
    double term=x;
    double sum=x;
    int i;
    for(i=1;i&lt;n;i++)
    {
      term = -pow(x,2)*term/((2*i+1)*2*i);
      sum += term;
    }

        printf("%lf",sum);
}
        </pre>
        `
    }

    func(){
        let term = this.x;
        let sum  = this.x;

        for(let i = 1 ; i < this.n; i++){
            term = -Math.pow(this.x,2)*term/((2*i+1)*2*i);
            sum+= term;
        }
        return sum;
    }

    expressios(){
        return `sin${this.x} = ${this.x} - (${this.x})^3/3! + (${this.x})^5/5! - (${this.x})^7/7!..........`;
    }

    Ccode(){
        return this.code;
    }

}

class Cosx{
    constructor(x,n){
        this.x = x ;
        this.n = n;
        this.code = 
        `
<pre style="color:green">
#include &lt;stdio.h&gt;
#include &lt;math.h&gt;


int main() {
    int n;
    double x;
    printf("Enter the value of x");
    scanf("%lf",&x);
    printf("Enter the value of n);
    scanf("%lf",&n);
    double term =x;
    double sum = x;
    int i;
    for(i=0;i&lt;n-1;i++){
        term = -pow(x,2)*term/((2*i+2)*(2*i+1));
        sum += term;
    }
    printf("%lf",sum);
	return 0;
}
</pre>
        
        `
    }


    func(){
        let term =  this.x;
        let sum = this.x;

        for(let i=0;i<this.n-1;i++){
            term = -Math.pow(this.x,2)*term/((2*i+2)*(2*i+1));
            sum += term;
        }
        console.log(sum)
        return sum;
    }

    expressios(){
        return `Cos${this.x}=1-${this.x}^2/2! + ${this.x}^4/4! - ${this.x}^6/6! + ${this.x}^8/8! - ${this.x}^10/10! .......`;
    }
    Ccode(){
        return this.code;
    }
}

class PolynomialValue{
    constructor(arr){
        this.arr =arr;
        
        this.code = 
        `
<pre style="color:green">
#include &lt;stdio.h&gt;

int main() {
    int n;
	double x;
	double arr[5] ;
	printf("Enter the number of terms including the term having 0 coeff\n");
	scanf("%d",&n);
	int i ;
	printf("Enter the coefficients from higher degree to lower\n");
	double coeff;
	for(i=0;i&lt;n;i++){
	    scanf("%lf",&coeff);
	    arr[i] = coeff;
	}
	printf("Enter the value of variable x\n");
	scanf("%lf",&x);
	
	double sum = arr[0];
	for(i=1;i&lt;n;i++){
	    sum = sum*x + arr[i];
	}
	
	printf("%lf",sum);
	
	
	
	return 0;
}
</pre>
        `;
    }

    func(){
        let  arr =  this.arr;
        let sum = arr[0];
        let x = arr[arr.length-1];
        for(let i= 1 ; i<arr.length-1;i++){
            sum = sum*x + arr[i];
        }
        return sum;
    }

    expressios(){
        let expression = "";
        
        for(let i =0 ; i<this.arr.length-1;i++){
            expression += `${this.arr[i]}*${this.arr[this.arr.length-1]}^${this.arr.length-2-i}+`
        }
        return expression;
    }

    Ccode(){
        return this.code;
    }


}