import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentifiationService } from 'app/Services/authentifiation.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  FormConnection:FormGroup;
  constructor(private fb: FormBuilder, private AuthenService: AuthentifiationService,private route:Router) { }

  ngOnInit(): void {
  }
  login()
  {
    this.route.navigate(['/dasboard'])
    
  }

}
