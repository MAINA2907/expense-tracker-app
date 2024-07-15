import React from 'react';
import { useNavigate } from 'react-router-dom';


function NavBar () {
    const navigate = useNavigate()

    return (
        <nav class=" navbar ">
            <div class=" barGraph container-fluid ">
              <a class="navbar-brand" onClick={() => navigate('/expense-tracker-app')}>EXPENSE TRACKER</a>
                <button class="btn btn-outline-success " type="button " onClick={() => navigate('/expense-tracker-app/expenses')}>
                  EXPENSES
                </button>
                <button class="btn btn-outline-success" type="button" onClick={() => navigate('/expense-tracker-app/budgets')}>
                  BUDGET
                </button>
             
            </div>
          </nav>
    )
}

export default NavBar

