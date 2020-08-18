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
    
    //  let byte_array = String.fromCharCode(input);
    //  let add_num = byte_array[0] - 97 + (byte_array[1] - 97) * 26 + (byte_array[2] - 97) * (26 ** 2)
    // return 1000 * add_num + int(byte_array[3:6])     
    //   if (input <= 999) {
    //      return `aaa${input.toString().padStart(3, '0')}`
    //   }


      const output = input.toString().padStart(3, '0');


      return (output);
   
  
    };

    let me = solve(998);
    console.log(`solve result: ${JSON.stringify(me)}`);
    // {'i': 4, 'n': 6},
    // {'i': 7, 'n': 15}
  }
}
