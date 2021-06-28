import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/Models/expense';
import { ExpenseService } from 'src/app/Services/expense.service';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit {

  expenses: Expense[]=[];
  constructor( private _expenseService: ExpenseService) { }

  ngOnInit(): void {
    this._expenseService.getExpenses().subscribe(
      data=> this.expenses=data
    )
  }

}
