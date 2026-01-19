import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img 
      src="assets/gam-docs-logo.png" 
      alt="GAM Docs" 
      [class]="getClasses()"
      (click)="goHome()">
  `
})
export class LogoComponent {
  @Input() heightClass: string = 'h-12';
  @Input() variant: 'default' | 'white' | 'sidebar' = 'default';
  @Input() customClass: string = '';

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

  getClasses(): string {
    const base = 'w-auto object-contain transition-all duration-300 cursor-pointer';
    
    const variants = {
      default: '',
      white: 'brightness-0 invert opacity-90 hover:opacity-100', // For dark backgrounds
      sidebar: 'drop-shadow-md' // For sidebar
    };

    return `${base} ${this.heightClass} ${variants[this.variant]} ${this.customClass}`;
  }
}

