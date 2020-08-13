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
    const solve = (input: number) => {

      const hourlyCharge = 30;
      const remainderCharge = 10;

      //under 10 charge full hour
      if (input <= 10) {
        return hourlyCharge;
      }

      let first = Math.floor(input / 60);
      console.log(`first: ${first}`);

      let rem = (input % 60) <= 5 ? 0 : input % 60;
      console.log(`rem: ${rem}`);

      if (rem > 30 ){
         ++first;
         rem = 0;
      }else {
        rem = remainderCharge;
      }

      return (first*hourlyCharge) + rem;
   
  
    };

    let me = solve(273);
    console.log(`solve result: ${JSON.stringify(me)}`);
    // {'i': 4, 'n': 6},
    // {'i': 7, 'n': 15}
  }
}
