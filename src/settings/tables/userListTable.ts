export enum LinkedSectionsColumn {
  Email = "email",
  FullName = "name",
  AccountType = "account_type",
  CreationDate = "created_at",
}

export const userListColumns = {
  userName: {
    fieldName: LinkedSectionsColumn.Email,
    title: "Email",
    alignment: "left",
    columnId: 2,
    isSortable: true,
    sortOrder: 2,
  },
  userEmail: {
    fieldName: LinkedSectionsColumn.FullName,
    title: "Full Name",
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
    fieldName: LinkedSectionsColumn.CreationDate,
    title: "Creation Date",
    alignment: "right",
    columnId: 4,
    isSortable: true,
    sortOrder: 4,
  },
};
