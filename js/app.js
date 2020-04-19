class UI {
  constructor () {
    this.budgetFeedback = document.querySelector('.budget-feedback')
    this.expenseFeedback = document.querySelector('.expense-feedback')
    this.budgetForm = document.getElementById('budget-form')
    this.budgetInput = document.getElementById('budget-input')
    this.budgetAmount = document.getElementById('budget-amount')
    this.expenseAmount = document.getElementById('expense-amount')
    this.balance = document.getElementById('balance')
    this.balanceAmount = document.getElementById('balance-amount')
    this.expenseForm = document.getElementById('expense-form')
    this.expenseInput = document.getElementById('expense-input')
    this.amountInput = document.getElementById('amount-input')
    this.expenseList = document.getElementById('expense-list')
    this.itemList = []
    this.itemID = 0
  }

  // budget submit
  submitBudgetForm () {
    const value = this.budgetInput.value

    // check for invalid input
    if (value === '' || value < 0) {
      this.budgetFeedback.classList.add('showItem')
      this.budgetFeedback.innerHTML = '<p>value cannot be empty or negative</p>'
      setTimeout(() => {
        this.budgetFeedback.classList.remove('showItem')
      }, 4000)
    } else {
      this.budgetAmount.textContent = value
      this.budgetInput.value = ''
      this.showBalance()
    }
  }

  submitExpenseForm () {
    // get expense info
    const expenseValue = this.expenseInput.value
    const expenseAmount = +this.amountInput.value

    // check for invalid information
    if (expenseValue === '' || expenseAmount === '' || expenseAmount < 0) {
      this.expenseFeedback.innerHTML = '<p>Expense information invalid</p>'
      this.expenseFeedback.classList.add('showItem')
      setTimeout(() => {
        this.expenseFeedback.classList.remove('showItem')
      }, 4000)
    }

    // add expense to list
    const expense = {
      id: this.itemID,
      title: expenseValue,
      amount: expenseAmount
    }

    this.itemList.push(expense)

    this.addExpense(expense)

    // increment id counter
    this.itemID++

    // clear input form
    this.expenseInput.value = ''
    this.amountInput.value = ''

    this.showBalance()
  }

  addExpense (expense) {
    const div = document.createElement('div')
    div.classList.add('expense')
    div.innerHTML =
      `<div class="expense-item d-flex justify-content-between align-items-baseline">
        <h6 class="expense-title mb-0 text-uppercase list-item">- ${expense.title}</h6>
        <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>
        <div class="expense-icons list-item">
          <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
            <i class="fas fa-edit"></i>
          </a>
          <a href="#" class="delete-icon" data-id="${expense.id}">
            <i class="fas fa-trash"></i>
          </a>
        </div>
      </div>`

    this.expenseList.appendChild(div)
  }

  showBalance () {
    // calculate remaining balance
    const budget = +this.budgetAmount.textContent
    const expense = this.totalExpense()
    const balanceAmount = budget - expense

    // add color to balance
    this.balance.classList.remove('showGreen', 'showBlack', 'showRed')
    if (balanceAmount < 0) {
      this.balance.classList.add('showRed')
    } else if (balanceAmount === 0) {
      this.balance.classList.add('showBlack')
    } else if (balanceAmount > 0) {
      this.balance.classList.add('showGreen')
    }

    // populate balance amount
    this.balanceAmount.textContent = balanceAmount
  }

  totalExpense () {
    const total = 0
    return total
  }
}

function eventListeners () {
  const budgetForm = document.querySelector('#budget-form')
  const expenseForm = document.querySelector('#expense-form')
  const expenseList = document.querySelector('#expense-list')

  // new ui instance
  const ui = new UI()

  // budget form submit
  budgetForm.addEventListener('submit', (event) => {
    event.preventDefault()
    ui.submitBudgetForm()
  })
  // expense form submit
  expenseForm.addEventListener('submit', (event) => {
    event.preventDefault()
    ui.submitExpenseForm()
  })
  // expense list click
  expenseList.addEventListener('click', (event) => {
    event.preventDefault()
  })
}

document.addEventListener('DOMContentLoaded', () => {
  eventListeners()
})
