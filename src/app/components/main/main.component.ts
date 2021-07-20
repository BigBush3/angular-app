import { Component, OnInit } from '@angular/core';
import { ContentBlock } from '../../models/main.interfaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  contentBlocks: ContentBlock[] = [];

  constructor(private apiService: ApiService) {}

  async ngOnInit(): Promise<void> {
    const blocks = await this.apiService.getContent();
    for (const block of blocks) {
      block.SingleImage.url = `${this.apiService.baseUrl}${block.SingleImage.url}`;
    }
    this.contentBlocks = blocks;
    console.log('what we fetched', blocks);
  }
}
