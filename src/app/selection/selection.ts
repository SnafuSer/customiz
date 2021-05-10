import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Cloudinary } from '@cloudinary/angular-5.x'; 
import { CloudinaryService } from '../../services/cloudinary.service';
import { AppComponent } from '../app.component'

@Component({
  selector: 'selection',
  templateUrl: 'selection.html',
  styleUrls: ['./selection.scss']
})
export class Selections {
  constructor(
    private snackBar: MatSnackBar,
    public  appComponent: AppComponent,
    public cloudinary: Cloudinary,
    public cloudinaryService: CloudinaryService,) {
  }

  public bgImage: any
  public currentChar: any
  public listLandscapes : Array<any> = [{
    public_id: "mugs/icons/empty"
  }]
  public listCharacters : Array<any> = []
  public listHairs : Array<any> = []
  public listAccess : Array<any> = []
  public listPants : Array<any> = []
  public listShirt : Array<any> = []
  public listSkins : Array<any> = [
    {
      name: "c", 
      color: "#FAE6D5"
    },
    {
      name: "c2", 
      color: "#F4CBAF"
    },
    {
      name: "c3", 
      color: "#D4A383"
    },
    {
      name: "c4", 
      color: "#63301E"
    },
  ]
  public listHairColors : Array<any> = [
    {
      name: "c1", 
      color: "#000000"
    },
    {
      name: "c2", 
      color: "#F2C94C"
    },
    {
      name: "c3", 
      color: "#F2994A"
    },
  ]
  public listShirtColors : Array<any> = [
    {
      name: "c1", 
      color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147467/mugs/male/clothes/seat/shirt/grey_gh2qeh.png"
    },
    {
      name: "c2", 
      color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147465/mugs/male/clothes/seat/shirt/blue_yg22vl.png"
    },
    {
      name: "c3", 
      color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147466/mugs/male/clothes/seat/shirt/green_ewuysi.png"
    },
    {
      name: "c4", 
      color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147465/mugs/male/clothes/seat/shirt/white_zfvyud.png"
    },
    {
      name: "c5", 
      color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147466/mugs/male/clothes/seat/shirt/pink_ifullc.png"
    },
    {
      name: "c6", 
      color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147465/mugs/male/clothes/seat/shirt/blue2_pn2zsy.png"
    },
    {
      name: "c7", 
      color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620147465/mugs/male/clothes/seat/shirt/red_zqvhvf.png"
    },
    {
      name: "c8", 
      color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620039278/mugs/male/clothes/seat/shirt/plaid.png"
    },
    {
      name: "c9", 
      color: "https://res.cloudinary.com/deck4daxl/image/upload/v1619618196/mugs/male/clothes/seat/shirt/jean_yb5rb1.png"
    },
    {
      name: "c10", 
      color: "https://res.cloudinary.com/deck4daxl/image/upload/v1619618196/mugs/male/clothes/seat/shirt/plaid_fqzedx.png"
    },
    {
      name: "c11", 
      color: "https://res.cloudinary.com/deck4daxl/image/upload/v1620146176/mugs/male/clothes/seat/shirt/milit_er8tm7.png"
    },
  ]
  public cloudinaryResponse: any 
  public display: string = "landscape" 
  public tabs: Array<any> = [
    {
      name: "Décor",
      type: "landscape",
      id: "photo"
    },
    {
      name: "Texte",
      type: "text", 
      id: "text"
    },
  ]
  public tabSide: string
  public textSide2: string
  public textTitle: Array<any> = [
    {
    title: "Sisters"
    },
    {
    title: "Besties"
    },
    {
    title: "Hollydays"
    },
    {
    title: "Happy Birthday"
    },
    {
    title: "Family"
    },
    {
    title: "Animals"
    },
    {
    title: "Baby"
    },
    {
    title: "Love"
    },
    {
    title: "Noël"
    },
    {
    title: "Anges"
    },
  ]
  ngOnInit() {
    this.getCloudinary('landscape')
    this.getCloudinary('listMan')
    this.tabSide = this.appComponent.tabSide
    this.listCharacters = this.appComponent.listCharacters
    this.bgImage = this.appComponent.choiceLanscape
    this.currentChar = this.appComponent.currentChar
    this.textSide2 = this.appComponent.textSide2
    this.tabs[0].selected = true; 
  }
  addCharacter() {
    this.appComponent.addCharacter()
    this.setActiveTab(this.appComponent.listCharacters.length - 1, 'characters')
  }
  // Set tabs
  setActiveTab(item, array) {
    this.changeSide('side1')
    if (array === 'characters') {
      this.display = 'character'
      for (let index = 0; index < this.tabs.length; index++) {
        this.tabs[index].selected = false
      }
      for (let i = 0; i < this.listCharacters.length; i++) {
        if (i === item) {
          this.listCharacters[item].selected = true; 
          this.currentChar = this.listCharacters[item]
          this.changeGender(this.currentChar.gender)
          this.displayHairStyle(this.currentChar.hairColor)
          this.displayShirtStyle('shirt' + this.currentChar.position)
        }
        else this.listCharacters[i].selected = false
      }
    } else {
      for (let index = 0; index < this.tabs.length; index++) {
        if (index === item) {
          this.tabs[index].selected = true
          this.display = this.tabs[index].type
        } else this.tabs[index].selected = false
      }
      for (let i = 0; i < this.listCharacters.length; i++) {
        this.listCharacters[i].selected = false
      }
      
    }
  }
  changeSide(side) {
    this.tabSide = side
    this.appComponent.tabSide = side
  }
  delete() {
    let index = this.appComponent.listCharacters.findIndex(current => current === this.currentChar)
    this.appComponent.listCharacters.splice(index, 1)
    this.setActiveTab(index - 1, 'characters')
  }
  changeBg(item, empty?) {
    for (let i = 0; i < this.listLandscapes.length; i++)  {
      if (this.listLandscapes[i].public_id === item.public_id) {
        this.listLandscapes[i].selected = true
      } else {
        this.listLandscapes[i].selected = false
      }
    };
    if (empty) {
      this.appComponent.choiceLanscape.img = ''
    } else {
      this.appComponent.choiceLanscape.img = 'https://res.cloudinary.com/deck4daxl/image/upload/v1614616342/' + item.public_id + '.png'
    }
  }
  changeTextTitle(item) {
    for (let i = 0; i < this.textTitle.length; i++)  {
      if (this.textTitle[i].title === item.title) {
        this.textTitle[i].selected = true
      } else {
        this.textTitle[i].selected = false
      }
    };
    this.appComponent.textTitle = item.title
  }
  // Get library img
  getCloudinary(src) {
    this.cloudinaryService.getCloudinary(src).subscribe(
      (response) => {
        this.cloudinaryResponse = response.resources
        switch (src) {
          case 'listMan':
            this.listManImg()
            break;
          case 'listFemale':
            this.listManImg()
            break;
          case 'landscape':
            this.listLandscapes = this.listLandscapes.concat(this.cloudinaryResponse)
            break;
        
          default:
            break;
        }
      },
      (error) => { return console.log('error', error)});
  }
  listManImg() {
    this.listHairs = []
    this.listShirt = []
    this.listPants = []
    this.listAccess = []
    this.cloudinaryResponse.forEach(element => {
      // Create each miniature list
      if (element.public_id.includes("hair")) {
        // create the hair name miniature
        var mySubString = element.public_id.substring(
          element.public_id.lastIndexOf("/") + 1, 
          element.public_id.lastIndexOf("-")
        );
        element.name = mySubString
        this.listHairs.push(element)
      }
      if (element.public_id.includes("shirt")) {
        if(this.currentChar.sexe === 'homme') {
          this.listShirt = [
            {
              public_id: "/assets/list/man/shirt1.svg",
              name: "shirt",
              display: true
            },
            {
              public_id: "/assets/list/man/tshirt1.svg",
              name: "tshirt",
              display: true
            },
            {
              public_id: "/assets/list/man/costume1.svg",
              name: "costume",
              display: true
            },
            {
              public_id: "/assets/list/man/sweat1.svg",
              name: "sweat",
              display: true
            },
          ]
        }
        if(this.currentChar.sexe === 'femme') {
          this.listShirt = [
            {
              public_id: "/assets/list/female/cropTop.svg",
              name: "cropTop",
              display: true
            },
            {
              public_id: "/assets/list/female/tshirt1.svg",
              name: "tshirt",
              display: true
            },
            {
              public_id: "/assets/list/female/longMarcel.svg",
              name: "longMarcel",
              display: true
            },
            {
              public_id: "/assets/list/female/sweat1.svg",
              name: "sweat",
              display: true
            },
          ]
        }
      }
      if (element.public_id.includes("pant")) {
        // create the pant name miniature
        var mySubString = element.public_id.substring(
          element.public_id.lastIndexOf("/") + 1, 
          );
          element.name = mySubString
          this.listPants.push(element)
        }
        if (element.public_id.includes("access")) {
          // create the access name miniature
          var mySubString = element.public_id.substring(
            element.public_id.lastIndexOf("/") + 1, 
          );
          element.name = mySubString
          this.listAccess.push(element)
      }
      this.displayHairStyle(this.currentChar.hairColor)
      this.displayShirtStyle('shirt' + this.currentChar.position)
    });
  }
  // Filter for display the good hair's colors && shirt position
  filterItemsOfHairs(){
    return this.listHairs.filter(x => x.display == true);
  }
  filterItemsOfShirt(){
    return this.listShirt.filter(x => x.display == true);
  }

  // change colors and style functions
  changeGender(item) {
    this.currentChar.gender = item
    switch (item) {
      case 'male':
        this.currentChar.sexe = 'homme'
        this.getCloudinary('listMan')
        break;
        case 'female':
        this.currentChar.sexe = 'femme'
        this.getCloudinary('listFemale')
        break;
      case 'animal':
        this.getCloudinary('listMan')
        break;
    
      default:
        break;
    }
  }
  changePosition(item) {
    this.currentChar.position = item
  }
  changeSkin(item) {
    this.currentChar.skinColor = item.name
  }
  changeHairColor(item) {
    this.currentChar.hairColor = item.name
    this.displayHairStyle(this.currentChar.hairColor)
  }
  changeShirtColor(item) {
    this.currentChar.shirtColor = item
    let svg = document.getElementById('salut' + this.currentChar.number)
    svg.getElementsByTagName('image').item(0).setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', item.color)
  }
  changeHairStyle(item) {
    this.currentChar.hairStyle = item.name
  }
  changeShirt(item) {
    console.log('change', item)
    this.currentChar.shirt = item.name   
    console.log('this.currentChar change shirt', this.currentChar)
    console.log('this.currentChar  appComp', this.appComponent.currentChar)
    this.changeShirtColor(this.currentChar.shirtColor)
    // let svg = document.getElementById('salut' + this.currentChar.number)
    // svg.getElementsByTagName('image').item(0).setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', this.currentChar.color)
  }
  changePant(item) {
    this.currentChar.pant = item.name
  }
  changeAccess(item) {
    if (item === "empty") return this.currentChar.access = item
    this.currentChar.access = item.name
  }

  // Display the good style hair && shirt depend on the color choice
  displayHairStyle(color) {
    for (let i = 0; i < this.listHairs.length; i++)  {
      if (this.listHairs[i].public_id.includes(color)) {
        this.listHairs[i].display = true
      } else {
        this.listHairs[i].display = false
      }
    };
  }
  displayShirtStyle(position) {
    // for (let i = 0; i < this.listShirt.length; i++)  {
    //   if (this.listShirt[i].public_id.includes(position)) {
    //     this.listShirt[i].display = true
    //   } else {
    //     this.listShirt[i].display = false
    //   }
    // };
  }


}
