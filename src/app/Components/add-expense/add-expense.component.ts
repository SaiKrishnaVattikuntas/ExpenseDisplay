import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/Models/expense';
import { ExpenseService } from 'src/app/Services/expense.service';
import {Router,  ActivatedRoute} from '@Angular/router';


@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  expense: Expense= new Expense();
  constructor( private _expenseService: ExpenseService,  private _router:Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   const isIdPresent= this._activatedRoute.snapshot.paramMap.has('id');
   console.log(this.expense.amount);
   if(isIdPresent){
   const id=this._activatedRoute.snapshot.paramMap.get('id');
   if(id!=null){
         this._expenseService.getExpense(+id).subscribe(
          data=>this.expense=data
         )
   }
  }
  }

  saveExpense(){
    this._expenseService.saveExpense(this.expense).subscribe(
      data=>{ 
        console.log('response',data);
        this._router.navigateByUrl("/expenses");
      }
    )
  }

}
