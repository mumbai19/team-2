import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  providers: [HttpClient]
})
export class CatalogComponent implements OnInit {
  private products:any[];
  private product:any;
  constructor(private client: HttpClient) { }

  ngOnInit() {
    this.client.get("http://10.49.148.116:8000/api/getproduct").subscribe(
      output => {
      this.products=output['data'];    
    }
    );
  }

}
