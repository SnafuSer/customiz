import { Component, OnDestroy, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Cloudinary } from '@cloudinary/angular-5.x'; 
import { CloudinaryService } from '../../services/cloudinary.service';
import { AppComponent } from '../app.component'

@Component({
  selector: 'preview',
  templateUrl: 'preview.html',
  styleUrls: ['./preview.scss']
})
export class Preview {
  constructor(
    private snackBar: MatSnackBar,
    public cloudinary: Cloudinary,
    public cloudinaryService: CloudinaryService,
    public appComponent: AppComponent,) {
  }
  public listCharacters: Array<any> = []
  

  public bgImage: any
  public choiceCharacter: any
  public choiceAnimal: any
  public choiceLanscape: any
  public tabSide: any

  // @ViewChildren('myCanvas')
  @ViewChildren("myCanvas") canvaslist: QueryList<any>
  
  public canvas: any;
  public context: CanvasRenderingContext2D
  public masterPages: number = 2
  ngOnInit() {
    this.getCloudinary('landscape')
    this.bgImage = this.appComponent.choiceLanscape
    this.listCharacters = this.appComponent.listCharacters
    this.tabSide = this.appComponent.tabSide
  }
  getCloudinary(src) {
    src = 'landscape'
    this.cloudinaryService.getCloudinary(src).subscribe(
      (response) => {
        for (let i = 0; i < response.resources.length; i++) {
          // this.listLandscape[i + 1] = {img : "https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/" + response.resources[i].public_id}
        }
      },
      (error) => { return console.log('error', error)}
    );
  }
  public myFunc = this.handler.bind(this);

  handler(svg, parent) {
    console.log('this.appComponent.listCharacters[parseInt(parent.id)] 1', this.appComponent.listCharacters[parseInt(parent.id)])
    if (isNaN(parseInt(parent.id))) {
      setTimeout(() => {
        svg.getElementsByTagName('pattern').item(0).id = "salut" + parent.id
        let st0 = svg.getElementsByClassName('st0')
        for(var i=0, len=st0.length; i<len; i++)
        {
            st0[i].style["fill"] = 'url("#salut' + parent.id + '")';
        }
        svg.getElementsByTagName('image').item(0).setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.appComponent.listCharacters[parseInt(parent.id)].shirtColor.color)    
      }, 50);
    } else {
      svg.getElementsByTagName('pattern').item(0).id = "salut" + parent.id
      let st0 = svg.getElementsByClassName('st0')
      for(var i=0, len=st0.length; i<len; i++)
      {
        st0[i].style["fill"] = 'url("#salut' + parent.id + '")';
      }
      svg.getElementsByTagName('image').item(0).setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.appComponent.listCharacters[parseInt(parent.id)].shirtColor.color)
    }
    return svg;
  }

  setActiveCharacter(item) {
    for (let i = 0; i < this.listCharacters.length; i++) {
      if (i === item) {
        this.listCharacters[i].choose = true; 
        this.choiceCharacter = this.listCharacters[i];
        this.appComponent.choiceCharacter = this.choiceCharacter
      }
      else this.listCharacters[i].choose = false
    }
  }
  export() {
    this.appComponent.export()
  }
 
}
