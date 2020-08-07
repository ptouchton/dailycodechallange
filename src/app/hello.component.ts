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
    
    const solve = (arr: Array<number>) => {
      
    const arr2 = [];
    arr.forEach((n, i) => (i > 0 && n - 1 !== arr[i-1]) ? arr2.push({i, n}) : false);
    return arr2;
 
    }

    let me = solve([1,2,3,4,6,7,8,15,16]);
    console.log(`solve result: ${JSON.stringify(me)}`);
    // {'i': 4, 'n': 6},
    // {'i': 7, 'n': 15}
  }
}
