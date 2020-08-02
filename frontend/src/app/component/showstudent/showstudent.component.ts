import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service'
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-showstudent',
  templateUrl: './showstudent.component.html',
  styleUrls: ['./showstudent.component.css'],
  providers: [StudentService]
})
export class ShowstudentComponent implements OnInit {

  public students: Student[]

  constructor(private _studentServices:StudentService) { }

  ngOnInit(): void {
    this.getStudent()
  }

  getStudent(){
    this._studentServices.getStudent().subscribe(
      response =>{
        if(response['allStudent']){
          this.students = response['allStudent']
          console.log(response['allStudent'])
        }
       
      },
      error =>{
        console.log(error)
      }
    )
  }

}
