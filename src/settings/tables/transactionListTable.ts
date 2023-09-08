// export const userListColumns = [
//   { userName: "test", email: "test", accountType: "test", transactionType: "test", date: "test" },
//
// ];

export enum LinkedSectionsColumn {
  UserName = "name",
  Email = "email",
  AccountType = "account_type",
  Transaction = "neuron_qnt",
  Date = "created_at",
}

export const transactionListColumns = {
  userName: {
    fieldName: LinkedSectionsColumn.UserName,
    title: "User Name",
    alignment: "left",
    columnId: 2,
    isSortable: true,
    sortOrder: 2,
  },
  userEmail: {
    fieldName: LinkedSectionsColumn.Email,
    title: "Email",
    alignment: "right",
    columnId: 3,
    isSortable: true,
    sortOrder: 3,
  },
  userAccountType: {
    fieldName: LinkedSectionsColumn.AccountType,
    title: "Account Type",
    columnId: 4,
    isSortable: true,
    sortOrder: 4,
  },
  userTransaction: {
    fieldName: LinkedSectionsColumn.Transaction,
    title: "Transaction",
    alignment: "right",
    columnId: 4,
    isSortable: true,
    sortOrder: 4,
  },
  date: {
    fieldName: LinkedSectionsColumn.Date,
    title: "Date of Transaction",
    alignment: "right",
    columnId: 5,
    isSortable: true,
    sortOrder: 5,
  },
};
