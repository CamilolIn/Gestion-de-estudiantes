import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service'
import { Student } from 'src/app/models/student';
import { Router, ActivatedRoute, Params } from '@angular/router'; // CLI imports router


@Component({
  selector: 'app-detstudent',
  templateUrl: './detstudent.component.html',
  styleUrls: ['./detstudent.component.css'],
  providers:[StudentService]
})
export class DetstudentComponent implements OnInit {

  public student:Student

  constructor(
    private _studentSevice:StudentService,
    private _router: Router,
    private _route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params.id

      this.getStudent(id)
    })
  }

  getStudent(id){
    return this._studentSevice.getStudentOne(id).subscribe(
      response =>{
        
        this.student = response['studentFind']
        console.log(this.student._id)
      },
      error =>{
        console.log(error)
      } 
    )
  }

  deleteStudent(id){
    this._studentSevice.deteleStudent(id).subscribe(
      response =>{
        if(response['studenR']){
          confirm("Esta seguro de eliminar este Estudiate?")
            this._router.navigate(['/show-students'])
            console.log(response)
        }
      },
      error =>{
        console.log(error)
      }
    )
  }

}
