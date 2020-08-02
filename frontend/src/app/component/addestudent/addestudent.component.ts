import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service'


@Component({
  selector: 'app-addestudent',
  templateUrl: './addestudent.component.html',
  styleUrls: ['./addestudent.component.css'],
  providers: [StudentService]
})
export class AddestudentComponent implements OnInit {

  public title: String;
  public student: Student

  constructor(
    private _studentService: StudentService
  ) { 
    this.title= 'REGISTRAR ESTUDIANTE';
    this.student = new Student('','','',0,'','',0)
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.student)
    this._studentService.saveStdent(this.student).subscribe(
      response =>{
        console.log(response)
        alert("Estudiante agregado correctamente")
        form.reset()
      },
      error => {
        console.log(error)
      }
    )
  }


}
