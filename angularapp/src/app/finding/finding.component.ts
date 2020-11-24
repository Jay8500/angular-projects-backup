import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'finding',
  templateUrl: './finding.component.html',
  styleUrls: ['./finding.component.css']
})
export class FindingComponent implements OnInit {

  public TextString = 'The Ancient Times of Egypt had been used to tell that there was nothing the was of Egypt.'
  public myDc = {};
  constructor() { }

  ngOnInit(): void {
  }
  textCount(){
      var tt = this.TextString.toLowerCase().split(' ');
      // console.log(tt);
      for( let i=0; i<tt.length; i++){
         var word = tt[i];
         console.log(typeof word);
         if(this.myDc[word] === undefined){
             this.myDc[word] = 1; 
            //  console.log(this.myDc);

         }
         else{
           this.myDc[word] = this.myDc[word] + 1;
          //  console.log(this.myDc);
         }
      }
      // console.log(this.myDc);
      return this.myDc;
  }
}
