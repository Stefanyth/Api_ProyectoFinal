import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ExpenseService } from '../expense.service'; // Asegúrate de importar el servicio

@Component({
  selector: 'app-verdatos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verdatos.component.html',
  styleUrls: ['./verdatos.component.css']
})
export class VerdatosComponent implements OnInit {
  expenses: any[] = [];
  currentPage: number = 1; // Página actual
  itemsPerPage: number = 10; // Número de elementos por página
  paginatedExpenses: any[] = []; // Gastos paginados

  constructor(private router: Router, private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses(): void {
    this.expenseService.getExpenses().subscribe({
      next: (data) => {
        this.expenses = data;
        this.updatePagination(); // Actualiza la paginación después de cargar los datos
      },
      error: (error) => {
        console.error('Error al cargar los gastos', error);
        alert('No se pudieron cargar los gastos.');
      }
    });
  }

  updatePagination(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedExpenses = this.expenses.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.updatePagination(); // Actualiza los datos de la página actual
  }

  onEdit(id: number): void {
    console.log('Editar elemento con ID:', id);
    this.router.navigate(['/editar', id]); // Navega al componente de edición con el ID
  }

  onDelete(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar este gasto?')) {
      this.expenseService.deleteExpense(id).subscribe({
        next: () => {
          console.log('Elemento eliminado con éxito');
          this.loadExpenses();
        },
        error: (error) => {
          console.error('Error eliminando el gasto', error);
          alert('Error eliminando el gasto');
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/menu']);
  }
}
