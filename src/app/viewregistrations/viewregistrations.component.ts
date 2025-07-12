import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Register } from '../models/register';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewregistrations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewregistrations.component.html',
  styleUrl: './viewregistrations.component.css'
})
export class ViewregistrationsComponent implements OnInit{
rarr:Register[]=[]
constructor(private rs:RegisterService){
}
ngOnInit(): void {
this.rs.getAll().subscribe(data=>{
  if(data.length>0)
    this.rarr=data
})
}
}
