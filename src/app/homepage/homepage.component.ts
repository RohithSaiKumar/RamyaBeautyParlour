import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Service {
  title: string;
  image: string;
  details?: string[];
  flipped?: boolean;
}

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  isMenuOpen = false;

  services: Service[] = [
    {
      title: 'Bleaching',
      image: '../../assets/bleaching.jpeg',
      details: ['Fruit Bleach', 'Herbal Bleach', 'Gold Bleach', 'Sun-Tan Bleach','Tan Bleach','D-Tan'],
      flipped: false
    },
    {
      title: 'Hair-Cut / Hair Care',
      image: '../../assets/hair-cut.jpg',
      details :['HairDye/Color/Spa','Straightening','Hair Spa','Hot Oil Massage','StraightCut','U Cut','Feather Cut','Step','Baby Cut','Apple','Round Cut'],
      flipped: false
    },
    {
      title: 'Hydra-Facial',
      image: '../../assets/hydra-facial.jpg',
      details:['Gold','Silver','Pearl','Fruit','Aroma','Bridal','Anti-Tan','D-Tan','Papaya','Wine','Ayurvedic'],
      flipped: false
    },
    {
      title: 'Makeup/Massages',
      image: '../../assets/makeup.jpg',
      details :['Simple','Manicure','Pedicure','Body','Hands','Legs','Face'],
      flipped: false
    },
    {
      title: 'Threading',
      image: '../../assets/thereading.jpg',
      details: ['Eyebrows', 'Side Block', 'Chin', 'UpperLip','Forehead'],
      flipped: false
    },
    {
      title: 'Waxing',
      image: '../../assets/waxing.jpg',
      details:['Hands/Legs','Body','Face','Head','Neck','Arms','Back','Lip','Chin','Underarms'],
      flipped: false
    },
    {
      title: 'Saree Draping',
      image: '../../assets/sareee.jpg',
      details:['Gujarathi','Single Warp','Gown Saree','Burmecee','Double Saree','Traditional','Marathi','7 Up','Necklace','Border Line','Waterfall'],
      flipped: false
    },
    {
      title: 'Bridal Makeup',
      image: '../../assets/wedding.webp',
      details:['Normal Makeup','Celebrity Makeup','Water Proof Makeup'],
      flipped: false
    }
  ];

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isMenuOpen = false;
    }
  }

  toggleFlip(service: Service) {
    if (service.details) {
      service.flipped = !service.flipped;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
