import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../expense.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // IMPORTAR FormsModule

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, FormsModule], // AGREGAR FormsModule AQUÍ
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  expenseId!: number; // ID del gasto a editar
  form: any = {
    type: '',
    amount: '',
    description: '',
    expense_date: '',
    stock: 1 // Inicializamos el stock como 1 (Yes)
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private expenseService: ExpenseService
  ) {}

  ngOnInit(): void {
    this.expenseId = +this.route.snapshot.paramMap.get('id')!; // Obtén el ID de la ruta
    this.loadExpense();
  }

  loadExpense(): void {
    this.expenseService.getExpenses().subscribe({
      next: (expenses) => {
        const expense = expenses.find((e: any) => e.id === this.expenseId);
        if (expense) {
          this.form = { ...expense }; // Rellena el formulario con los datos
        } else {
          alert('El gasto no fue encontrado.');
          this.router.navigate(['/verdatos']);
        }
      },
      error: (error) => {
        console.error('Error al cargar el gasto', error);
        alert('Error al cargar el gasto.');
        this.router.navigate(['/verdatos']);
      }
    });
  }

  onSubmit(): void {
    // Convertimos `stock` a entero antes de enviar
    this.form.stock = this.form.stock === true || this.form.stock === 'true' ? 1 : 0;

    this.expenseService.updateExpense(this.expenseId, this.form).subscribe({
      next: () => {
        alert('Gasto actualizado exitosamente');
        this.router.navigate(['/verdatos']);
      },
      error: (error) => {
        console.error('Error al actualizar el gasto', error);
        alert('Error al actualizar el gasto');
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/verdatos']);
  }
}
