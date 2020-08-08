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
    
    const solve = (input: Array<number>) => {
      
   input.map((x,i) => [x, input[i+1], i+1]).filter(([b,f,i]) => b+1 != f && f != undefined).map(([_,n,i])=>({n,i}))
 
    }

    let me = solve([1,2,3,4,6,7,8,15,16]);
    console.log(`solve result: ${JSON.stringify(me)}`);
    // {'i': 4, 'n': 6},
    // {'i': 7, 'n': 15}
  }
}
