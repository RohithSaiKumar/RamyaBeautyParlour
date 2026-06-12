import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

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
export class HomepageComponent {
 
  isMobileMenuOpen = false;
  isScrolled = false;

  services = [
    {
      title: 'Bleaching',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
      items: ['Fruit Bleach', 'Herbal Bleach', 'Gold Bleach', 'D-Tan', 'Sun-Tan']
    },
    {
      title: 'Hair Cut & Care',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
      items: ['Hair Spa', 'Straightening', 'Coloring', 'Hot Oil Massage']
    },
    {
      title: 'Hydra Facial',
      image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
      items: ['Gold', 'Pearl', 'Bridal', 'Anti-Tan', 'Ayurvedic']
    },
    {
      title: 'Makeup & Massages',
      image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=600&q=80',
      items: ['Bridal Makeup', 'Manicure', 'Pedicure', 'Body Massage']
    },
    {
      title: 'Threading & Waxing',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
      items: ['Eyebrows', 'Upper Lip', 'Full Face', 'Full Body']
    },
    {
      title: 'Saree Draping',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e1?w=1200&q=80',
      items: ['Traditional', 'Gujarathi', 'Waterfall', 'Bridal']
    }
  ];

  bridalPackage = {
    title: 'Bridal Package',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    items: ['Bridal Makeup', 'Hair Styling', 'Mehendi', 'Skin Glow Treatment']
  };

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 40;
  }
}