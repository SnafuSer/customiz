import { Component, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private dialog: MatDialog,
    public sanitizer: DomSanitizer) {
      this.options = {
        characters: [
          {
            number: 0,
            gender: "female",
            hairColor: "c1",
            hairStyle: "hair5",
            access: "empty",
            name: "Puce",
            pant: "pant1",
            position: "1",
            selected: false,
            shirt: "tshirt",
            shirtColor: {
              name: "c7",
              color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147465/mugs/male/clothes/seat/shirt/red_zqvhvf.png"
            },
            skinColor: "c2",
            type: "character",
          },
          {
            number: 1,
            gender: "male",
            hairColor: "c1",
            hairStyle: "hair1",
            access: "empty",
            name: "Snafu",
            pant: "pant2",
            position: "1",
            selected: false,
            shirt: "tshirt",
            shirtColor: {
              name: "c2", 
              color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147465/mugs/male/clothes/seat/shirt/blue_yg22vl.png"
            },
            skinColor: "c2",
            type: "character",
          }
        ],
        landscape: {img: "https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/mugs/paysage/mountain.png"},
        textTitle: "Love",
        textSide2: { text: "Aloha que tal", 
                     size: "35px",
                     lineHeight: "75px",
                     background: ""
                   }
      }
      this.createhorsLigne() 
    }

    public tabSide: string = 'side1'
    public loading: boolean = true
    public loadingText: string = "Chargement de la librairie en cours..."
    public textTitle: string
    public textSide2: any 
    public choiceCharacter: any
    public choiceAnimal: any
    public choiceLanscape: any
    public listCharacters : Array<any> = []
    public currentChar : any = {}
    public options : any = {}
    public display: boolean = false

    ngOnInit() {

    }
      
    @HostListener('window:message', ['$event'])
    onMessage(event) {
      if (event.data.options) {
        this.options = JSON.parse(event.data.options)
        this.listCharacters = this.options.characters
        this.choiceLanscape = this.options.landscape
        this.textTitle = this.options.textTitle
        this.currentChar = this.listCharacters[0]
        this.display = true
        this.loading = false
      }
      if(event.data === "Item added") {
        this.loading = false
      }
    }
    createhorsLigne() {
      this.listCharacters = this.options.characters
      this.choiceLanscape = this.options.landscape
      this.textTitle = this.options.textTitle
      this.textSide2 = this.options.textSide2
      this.currentChar = this.listCharacters[0]
      this.display = true
      this.loading = false
    }
    createListcharacters() {
      this.listCharacters = [{
        number: 0,
        type: "character",
        name: "Perso 1",
        gender: "male", 
        position: "1",
        skinColor: "c",
        hairColor: "c1",
        hairStyle: "hair2",
        shirt: "tshirt",
        shirtColor: {
              name: "c1", 
              color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620039278/mugs/male/clothes/seat/shirt/plaid.png"
            },
        pant: "pant1",
        access: "empty",
      },
      {
        number: 1,
        type: "character",
        name: "Perso 2",
        gender: "female", 
        position: "2",
        skinColor: "c2",
        hairColor: "c2",
        hairStyle: "hair1",
        shirt: "tshirt",
        shirtColor: {
              name: "c2", 
              color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147465/mugs/male/clothes/seat/shirt/blue_yg22vl.png"
            },
        pant: "pant1",
        access: "empty",
      }]
      this.choiceLanscape = {
        img: "https://res.cloudinary.com/deck4daxl/image/upload/v1614610615/mugs/paysage/campaign_yodqct.png"
      }
    }
    addCharacter() {
      this.listCharacters.push({
        number: this.listCharacters.length,
        type: "character",
        name: "Perso " + (this.listCharacters.length + 1),
        gender: "male", 
        position: "1",
        skinColor: "c",
        hairColor: "c1",
        hairStyle: "hair2",
        shirt: "tshirt",
        shirtColor: {
          name: "c3", 
          color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147466/mugs/male/clothes/seat/shirt/green_ewuysi.png"
        },
        pant: "pant1",
        access: "empty",
      })
      this.currentChar = this.listCharacters[this.listCharacters.length]
    }

    export() {
      this.loadingText = "Création du design en cours..."
      this.loading = true
      let test = {
        textSide2: this.textSide2,
        textTitle: this.textTitle,
        landscape: this.choiceLanscape,
        characters: this.listCharacters
      }
      let message = JSON.stringify(test) 
      console.log('ok', test)
      window.parent.postMessage({export: message, characters: this.listCharacters.length, textTitle: this.textTitle}, '*');
    }
}
