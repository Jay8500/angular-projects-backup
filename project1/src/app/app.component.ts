import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// import {CheckboxModule} from 'primeng/checkbox';
import { CalendarModule } from 'primeng/calendar';
import { DemoService } from './demo.service';
import { HelpViewchildComponent } from './help-viewchild/help-viewchild.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'project1';
  // myForm: FormGroup;

  @ViewChild(HelpViewchildComponent) hook: HelpViewchildComponent;
  @ViewChild("targetVariable", { static: false}) myV: ElementRef;
  myForm = this.fb.group({
    name: '',
    email: '',
    message: '',
    value: ''
  })
  paste = [];

  myBakcend = {
    data: null,
    apidata: null
  }

  constructor(private fb: FormBuilder, private http: DemoService) {
    this.http.addTheApi().subscribe((data) =>
      this.myBakcend = {
        data: data,
        apidata: data
      }
    );
  }

  public ba = false;

  fovu;
  ngOnInit() { }

  ngAfterViewInit() {
    console.log(this.hook.da.charAt(2));
    console.log('element rf', this.myV.nativeElement);
  }
  onSubmit(): void {
    this.paste.push(this.myForm.value);
    this.ba = true;
    console.log('paste array', this.paste);
    var ls = localStorage.setItem('my', JSON.stringify(this.paste));
    var sl = localStorage.getItem('my');
    this.myForm.reset();
    console.log('var sl', JSON.parse(sl));
    // console.log(this.myBakcend.apidata.masterApi);
    console.log(this.hook.da.split(' '));
    let f = this.hook.da.split(' ');
    if (f.length > 0) {
      console.log(this.hook.da.slice(2, 4));
    }


  }




}
