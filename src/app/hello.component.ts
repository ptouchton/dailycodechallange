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

    const arr: Array<string> = ['12.34', '-0.89', '-$ 0.1','007','$-2.3456','$.2','$. 7'];

    console.log(`array: ${arr}`);

    const solve = xs => {
      
      xs.forEach(x => {

        const num = +x.replace(/[\$,' ']/g, '');
        console.log(`num: ${num}`);

      })
    }

    let me = solve(arr);
   
  }
}
