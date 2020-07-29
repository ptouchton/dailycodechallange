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

  arr: Array<number> = [8, 1, 4];
  ngOnInit() {
    console.log(`array: ${this.arr}`);

    const solve = xs => {
      if (xs[0] === xs[1] && xs[0] === xs[2]) return Math.floor(xs[0] * 1.05);

      xs.sort();
      console.log(`x0: ${xs[0]}`);
      console.log(`x1: ${xs[1]}`);
      console.log(`x2: ${xs[2]}`);
      return Math.min(xs[2], xs[1] + xs[0]);
    };

    let me = solve(this.arr);
    console.log(`solve result: ${me}`);

  }
}
