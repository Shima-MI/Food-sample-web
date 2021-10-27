import { TasteService } from '../../services/taste.service';
import { Taste } from '../../models/taste';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-taste',
  templateUrl: './taste.component.html',
  styleUrls: ['./taste.component.css']
})
export class TasteComponent implements OnInit {

  @Input() item: any;

  tastes: Taste[];

  isClickmore: boolean= false;
  //  '<p class="moreText">In a separate bowl, whisk the almond flour, cocoa powder, coconut flour, baking soda and salt together. Add the dry ingredients to the wet ingredients and mix well. Mixture will be on the thicker side.5 Divide batter evenly between pans and spread out with a spatula to smooth the tops. Bake for 20-30 minutes until a tester comes out clean or with just a few crumbs attached; rotating the pans halfway through baking. Let cake cool in the pan for 15 minutes then transfer to the fridge to finish cooling completely. Allow cake to cool in the fridge for at least an hour before removing from the pan and frosting. The cake should be room temperature when you frost it. This is very important. Cake can be made a day ahead if you’d like!6 Finish making your frosting: Scoop the hardened chocolate coconut cream frosting mixture into a large bowl. Use a hand mixer or a KitchenAid mixer to beat frosting until peaks form and it looks nice, fluffy and creamy. Use immediately!7 Layer cake, using about 1/3 -½ cup frosting between each layer, then frost the top and sides with remaining frosting. Serves 12-16! Cake can be stored at room temp for a day or two, then should be transferred to the fridge.</p>');

  constructor(private tasteService: TasteService, private elementRef: ElementRef) { }

  
  ngOnInit(): void {
     this.tastes= this.tasteService.getAll();
  }

  ngAfterViewInit() {
    var d1 = this.elementRef.nativeElement.querySelector('.more');
    this.isClickmore= true;
    if(this.isClickmore){
        d1.insertAdjacentHTML('', 
        '<p class="moreText">In a separate bowl, whisk the almond flour, cocoa powder, coconut flour, baking soda and salt together. Add the dry ingredients to the wet ingredients and mix well. Mixture will be on the thicker side.5 Divide batter evenly between pans and spread out with a spatula to smooth the tops. Bake for 20-30 minutes until a tester comes out clean or with just a few crumbs attached; rotating the pans halfway through baking. Let cake cool in the pan for 15 minutes then transfer to the fridge to finish cooling completely. Allow cake to cool in the fridge for at least an hour before removing from the pan and frosting. The cake should be room temperature when you frost it. This is very important. Cake can be made a day ahead if you’d like!6 Finish making your frosting: Scoop the hardened chocolate coconut cream frosting mixture into a large bowl. Use a hand mixer or a KitchenAid mixer to beat frosting until peaks form and it looks nice, fluffy and creamy. Use immediately!7 Layer cake, using about 1/3 -½ cup frosting between each layer, then frost the top and sides with remaining frosting. Serves 12-16! Cake can be stored at room temp for a day or two, then should be transferred to the fridge.</p>');
        }
  }

  }




