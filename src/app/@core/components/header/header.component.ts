import { ConfigService } from '../../services/config.service';
import { Component } from '@angular/core';

/**
 * First commit about Header
 */
@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  /**
   * First variable: background
   */
  bgUrl: string;
  /**
   * Param config
   * @param config Param config
   */
  constructor(private config: ConfigService) {
    this.config.bgVar$.subscribe( data => {
      console.log('header', data);
      this.bgUrl = data;
    });
  }

}
