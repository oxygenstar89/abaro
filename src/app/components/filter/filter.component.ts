import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { FilterType } from '../../services/pokedex-data.model';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatSelectModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Input() list!: string[];
  @Input() type!: FilterType;
  @Output() filterData = new EventEmitter<{type: FilterType, value: string}>();

  filterSelected(type: FilterType, {value}: MatSelectChange) {
    this.filterData.emit({type, value});
  }

}
