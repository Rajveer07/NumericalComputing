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

class polyDiv{
    constructor(arr){
        this.arr = arr;
        this.code= 
        `
<pre style="color:green">
#include &lt;iostream&gt;
using namespace std;

int main() {
	double arr[6] = {1,2,3,4,5,6};
	double x =1;
	double quotioent[5];
	double q=0;
	double remain;
	for(int i=0;i&lt;=5;i++){
	    if(i&lt5){
	    q = q*x + arr[i];
	    quotioent[i]=q;
	    }else{
	        q = q*x + arr[i];
	        remain = q;
	    }
	    
	}
	for(int i=0;i&lt;5;i++){
	    cout&lt;&lt;quotioent[i]&lt;&lt;" ";
	}
	    cout&lt;&lt;"remainder"&lt;&lt;"\n"&lt;&lt;remain;
	
	return 0;
}
</pre>

        `
    }

    func(){
        let x = this.arr[this.arr.length-1];
        let quotioent = [];
        let term=0;
        let remainder=0;
        for(let i =0;i<=this.arr.length-2;i++){
            if(i<this.arr.length-2){
            term = term*x + this.arr[i];
            quotioent[i]=term;
            }else{
                term = term*x + this.arr[i];
                remainder = term;
            }
        }

        return {quotioent,remainder};


    }

    expressios(){
        let expression= "";
        for(let i=0;i<this.arr.length-1;i++){
            expression += `${this.arr[i]}x^${this.arr.length-2-i}+`;

        }
        return expression;

    }

    Ccode(){
        return this.code;
    }
}

class lnx{
    constructor(arr){
        this.arr = arr;
        this.code =
`
<pre style="color:green">
#include &lt;iostream&gt;
#include &lt;cmath&gt;
using namespace std;

int main() {
    int n=2;
    int i;
    double x=1.0;
    double sum=x;
    double term=x;
    
    for(i=1;i&lt;n;i++){
        term = -x*term*i/(i+1);
        sum = sum + term;
       
        
    }
    
    cout&lt;&lt;sum;
    
	return 0;
}
</pre>
`        
    }

    func(){
        let x = this.arr[0];
        let n = parseInt(this.arr[1]);
        let sum = x;
        let term =x;
        for(let i =1 ; i<n;i++){
            term = -x*term*i/(i+1);
            sum += term;

        }

        return sum;

    }

    expressios(){
        let expression ="";
        let n = parseInt(this.arr[1]);
        for(let i=1;i<=n;i++){
            expression += `${Math.pow(-1,i+1)*this.arr[0]}^${i}/${i}+`
        }
        return expression;
    }

    Ccode(){
        return this.code;
    }
}