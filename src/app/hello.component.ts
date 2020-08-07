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
      
      const outArr: Array<object> = [];
      for (let i = 0; i < input.length; i++){
        // console.log(`val: ${input[i]}`);

         console.log(`i: ${i}`);
         let lookUp = input.indexOf(i+1);
         console.log(`lookup: ${lookUp}`);
    
         if (lookUp === -1){
           
           outArr.push(
             {'i': i,
              'n': (input[i])}
           )

         } 
      }
      return outArr;

    }

    let me = solve([1,2,3,4,6,7,8,15,16]);
    console.log(`solve result: ${JSON.stringify(me)}`);
    // {'i': 4, 'n': 6},
    // {'i': 7, 'n': 15}
  }
}
