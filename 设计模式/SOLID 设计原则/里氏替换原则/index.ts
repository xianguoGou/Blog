// class Account {
//   // 可以包含账户共有的属性和方法，例如账户ID、持有者信息等
//   // 假设有一些共通的实现
//   withdraw(amount: number) {
//     console.log("Withdraw from Account");
//   }
// }

// // 存款账户
// class SavingsAccount extends Account {
//   withdraw(amount: number) {
//     console.log("Withdraw from Savings Account");
//   }
// }

// // 定期存款账户
// class FixedTermDepositAccount extends Account {
//   // 因为继承了 Account 父类，所以必须有 withdraw 这个方法
//   // 但是又由于特殊性不能够提前取款，所以该方法内部是抛出一个错误
//   withdraw(amount: number) {
//     throw new Error("Cannot withdraw from a Fixed Term Deposit Account");
//   }
// }

abstract class Account {
  // 可以包含账户共有的属性和方法，例如账户ID、持有者信息等
}

interface Withdrawable {
  withdraw(amount: number): void;
}

class WithdrawableAccount extends Account implements Withdrawable {
  // 实现了 withdraw 方法
  withdraw(amount: number) {
    console.log("Withdraw from Savings Account");
  }
}
// 存款账户，实现 Withdrawable 接口
class SavingsAccount extends WithdrawableAccount {
  withdraw(amount: number): void {
    console.log("Withdraw from Savings Account", amount);
  }
}

// 定期存款账户，不实现 Withdrawable 接口
class FixedTermDepositAccount extends Account {}

const savingsAccount = new SavingsAccount();
savingsAccount.withdraw(1000);
