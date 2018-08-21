function BankAccount (Name, initialDeposit, depositAmount, withdrawalAmount) {
  this.Name = Name;
  this.initialDeposit = initialDeposit;
  this.depositAmount = depositAmount;
  this.withdrawalAmount = withdrawalAmount;
  };

 BankAccount.prototype.balance = function() {
   return this.initialDeposit  + this.depositAmount - this.withdrawalAmount
 };


$(document).ready(function(){
  $("form#bank").submit(function(event){
    event.preventDefault();

    var inputtedName = $("input#name").val();
    var inputtedInitialDeposit = parseInt($("input#initial-deposit").val());
    var inputtedDepositAmount = parseInt($("input#deposit-amount").val());
    var inputtedWithdrawalAmount = parseInt($("input#withdrawl-amount").val());

    var newBankAccount = new BankAccount (inputtedName, inputtedInitialDeposit, inputtedDepositAmount, inputtedWithdrawalAmount);
    console.log(newBankAccount)
    $("#displayBalance").text(newBankAccount.balance())


    $("#displayBalance").text(this.balance);
  })

})
