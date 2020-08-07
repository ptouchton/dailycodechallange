import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  
  ngOnInit() {
    
    const solve = (address: number,n: number) => {
      
      const oddArr: Array<number> = [];
      const evenArr: Array<number> = [];

      console.log(`address: ${address}`);
      console.log(`number of houses: ${n}`);
      
      const res = address % 2;
      if (res === 1){
         let j = -2;
         for(let i = 0; i < n; i++){
           j = j+2;
           oddArr.push(1 + j );
           console.log(`odds: ${oddArr[i]}`); 
         };

         j = oddArr[n-1];
         console.log(`j: ${j}`);
         j = j+2;
         for(let i = 0; i < n; i++){
           j = j-2;
           evenArr.push(1 + j );
           console.log(`evens: ${evenArr[i]}`); 
         };

         const locAddr = oddArr.indexOf(address);
         return evenArr[locAddr];
      }


      console.log(`result: ${res}`);
      
    };

    let me = solve(3,6);
    console.log(`solve result: ${me}`);

  }
}
