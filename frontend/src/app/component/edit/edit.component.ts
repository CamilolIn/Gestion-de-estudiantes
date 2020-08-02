import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service'
import { Student } from 'src/app/models/student';
import { Router, ActivatedRoute, Params } from '@angular/router'; // CLI imports router

@Component({
  selector: 'app-edit',
  templateUrl: '../addestudent/addestudent.component.html',
  styleUrls: ['../addestudent/addestudent.component.css'],
  providers: [StudentService]
})
export class EditComponent implements OnInit {

  public title: String;
  public student: Student

  constructor(
    private _studentService: StudentService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.title= 'ACTUALIZAR ESTUDIANTE';
    //this.student = new Student('','','',0,'','',0)
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params.id

      this.getStudent(id)
    })
  }

  getStudent(id){
    return this._studentService.getStudentOne(id).subscribe(
      response =>{
        
        this.student = response['studentFind']
        console.log(this.student._id)
      },
      error =>{
        console.log(error)
      } 
    )
  }

  onSubmit(form){
    console.log(this.student)
    this._studentService.updateStudent(this.student).subscribe(
      response =>{
        console.log(response)
        alert("Estudiante Actualizado correctamnete")
        form.reset()
      },
      error => {
        console.log(error)
      }
    )
  }

}
