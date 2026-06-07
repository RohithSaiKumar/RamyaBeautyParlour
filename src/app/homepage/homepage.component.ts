import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Service {
  title: string;
  image: string;
  details: string[];
}

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  isMenuOpen = false;

  services: Service[] = [
    { title: 'Bleaching', image: '../../assets/bleaching.jpeg', details: ['Fruit Bleach', 'Herbal Bleach', 'Gold Bleach', 'D-Tan', 'Sun-Tan'] },
    { title: 'Hair Cut & Care', image: '../../assets/hair-cut.jpg', details: ['Hair Spa', 'Straightening', 'Coloring', 'Hot Oil Massage'] },
    { title: 'Hydra Facial', image: '../../assets/hydra-facial.jpg', details: ['Gold', 'Pearl', 'Bridal', 'Anti-Tan', 'Ayurvedic'] },
    { title: 'Makeup & Massages', image: '../../assets/makeup.jpg', details: ['Bridal Makeup', 'Manicure', 'Pedicure', 'Body Massage'] },
    { title: 'Threading & Waxing', image: '../../assets/waxing.jpg', details: ['Eyebrows', 'Upper Lip', 'Full Face', 'Full Body'] },
    { title: 'Saree Draping', image: '../../assets/sareee.jpg', details: ['Traditional', 'Gujarathi', 'Waterfall', 'Bridal'] },
    { title: 'Bridal Package', image: '../../assets/wedding.webp', details: ['Makeup', 'Hair', 'Mehendi'] }
  ];

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
      if ((card as HTMLElement).getBoundingClientRect().top < window.innerHeight * 0.85) {
        (card as HTMLElement).classList.add('visible');
      }
    });
  };


toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
}

scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMenuOpen = false;   // Close menu after click
}
}