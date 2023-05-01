pragma circom 2.0.0;

/*This circuit template checks that c is the multiplication of a and b.*/  

template Solvability() {  

   // Declaration of signals.  
   signal input sc;  // total value of stable coin
   signal input c;   // total value of collateral
   signal input e;   // Exchange rate between stable coin and collateral
   signal output result;  // solvability

   // Constraints.  
   var v = sc * e; 
   var s = v >= c;
   result <-- s;
   result === 1;
}

component main = Solvability();  