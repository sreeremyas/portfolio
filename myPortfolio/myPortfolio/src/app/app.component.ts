import { Component } from '@angular/core';
import {CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavModule } from '@coreui/angular';
import { GridModule } from '@coreui/angular';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavModule,GridModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  activeTab:boolean=false;
  selectedTab=1;
  title = 'myPortfolio';
  tabs=[{name:"About Me",active:true,select:1},
  {name:"Skills",active:false,select:2},
  {name:"Learnings",active:false,select:3},
  {name:"Project",active:false,select:4},
  {name:"Connect",active:false,select:5},

  ]
  changeInTabSelection(item:any){
 
  this.tabs.map((select: any) => select.active = select.name === item.name ? true : false);
  }
}
