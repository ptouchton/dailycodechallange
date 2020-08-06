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
      
      console.log(`address: ${address}`);
      console.log(`number of houses: ${n}`);
      
      const res = address % 2;
      console.log(`result: ${res}`);
      
    };

    let me = solve(3,3);
    console.log(`solve result: ${me}`);

  }
}
