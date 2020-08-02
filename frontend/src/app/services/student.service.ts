import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Student } from '../models/student'
import { Global } from './global';


@Injectable()
    export class StudentService{
        public url:String;

        constructor(private _http:HttpClient){
            this.url = Global.url
        }

        testService(){
            return 'Probando Servcio'
        }

        saveStdent(student:Student): Observable<any> {
            console.log("Service:")
            console.log(student)
            let params = JSON.stringify(student)
            console.log(params)
            let header = new HttpHeaders().set("Content-Type","application/json")
            console.log(header)
            return this._http.post(this.url+'save-student', params,{headers:header})
        }

        getStudent(): Observable<any>{
            let header = new HttpHeaders().set("Content-Type","application/json")
            return this._http.get(this.url+"studentsAll", {headers:header})
        }

        getStudentOne(id): Observable<any>{
            let header = new HttpHeaders().set("Content-Type","application/json")
            return this._http.get(this.url+"studentId/"+id, {headers:header}) 
        }

        deteleStudent(id): Observable<any>{
            let header = new HttpHeaders().set("Content-Type","application/json")
            return this._http.delete(this.url+"studentremove/"+id, {headers:header}) 
        }

        updateStudent(student): Observable<any>{
            let params = JSON.stringify(student)
            let header = new HttpHeaders().set("Content-Type","application/json")
            return this._http.put(this.url+"studentupdate/"+student._id, params, {headers:header}) 
        }
}