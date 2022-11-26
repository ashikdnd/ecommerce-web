import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AdminProductService} from "../admin-product.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  prodForm: FormGroup;

  constructor(private fb: FormBuilder, private aps: AdminProductService) {
    this.prodForm = this.fb.group({
      title: ['Canon camera', [Validators.required]],
      price: ['1500', [Validators.required]],
      desc: [`DSLR Camera

* 25mm lense
* 1.5 F/A`, [Validators.required]],
      sku: ['HFY62ILV91R2', [Validators.required]],
      features: [],
      maker: ['CANON', [Validators.required]],
      model: ['CN5613', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  saveProduct(): void {
    const formData = this.prodForm.value;
    console.log(formData);
    this.aps.saveProduct(formData).subscribe({
      next: (res: any) => {
        console.log(res)
        Swal.fire('Product saved', '', 'success')
      },
      error: (e) => {
        console.log(e);
        Swal.fire('Unable to save product', '', 'error')
      }
    })
  }

}
