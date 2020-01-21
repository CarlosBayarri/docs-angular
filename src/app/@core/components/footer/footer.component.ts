import { SharedElement } from './../../interfaces/shared-element.interface';
import { Component, OnInit } from '@angular/core';

/**
 * First commit about Footer
 */

@Component({
  selector: 'blog-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  /**
  * Variable: current year
  */
  currentYear: number = new Date().getFullYear();
  /**
  * Variable: Author
  */
  author = 'Anartz Mugika Ledo';
  /**
   * @ignore
   */
  sharedElements: SharedElement[] = [
    {
      url: 'https://twitter.com/',
      path: 'mugan86',
      icon: 'fab fa-twitter'
    },
    {
      url: 'https://github.com/',
      path: 'mugan86',
      icon: 'fab fa-github'
    },
    {
      url: 'https://www.linkedin.com/in/',
      path: 'anartz-mugika-0007a062',
      icon: 'fab fa-linkedin'
    },
    {
      url: 'https://bintray.com/',
      path: 'amugika/maven',
      icon: 'fas fa-frog'
    },
    {
      url: 'https://npmjs.com/',
      path: '~mugan86',
      icon: 'fab fa-npm'
    }
  ];

  /**
   * Init life cycle
   */
  ngOnInit() {

  }
  /**
   * Hola mundo
   * 
   * [Go to head component #bgUrl]{@link HeaderComponent#bgUrl}
   * @example
   * Giving \"Carlos\"
   * Show content \"Carlos\"
   * @returns Return hola mundo
   */
  holaMundo(): string {
    return 'hola mundo';
  }
  /**
   * Hola mundo plus
   * 
   * [Google]{@link http://google.com}
   * @param name name to 
   * @returns Return hola mundo
   */
  private holaMundoPlus(name: string): string {
    return 'hola mundo ' + name;
  }
}


