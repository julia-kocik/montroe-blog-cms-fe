import { Component, inject } from '@angular/core';
import { ToastService } from '../../../services/toast.service';


@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
})
export class Toast {
  readonly toastService = inject(ToastService);
}