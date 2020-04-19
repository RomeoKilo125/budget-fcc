class UI {
  constructor() {
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
    if (value === '' || value < 0) {
      this.budgetFeedback.classList.add('showItem')
      this.budgetFeedback.innerHTML = '<p>value cannot be empty or negative</p>'
      setTimeout(() => {
        this.budgetFeedback.classList.remove('showItem')
      }, 4000)
    }
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
  })
  // expense list click
  expenseList.addEventListener('click', (event) => {
    event.preventDefault()
  })
}

document.addEventListener('DOMContentLoaded', () => {
  eventListeners()
})
