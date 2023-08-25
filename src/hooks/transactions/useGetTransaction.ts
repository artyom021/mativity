import { useApi } from "@/api";
import { API_ROUTES } from "@/api/apiRoutes";
import { useAppStore } from "@/store/app/appStore";
import { Transaction, useTransactionStore } from "@/store/transactions/transactionStore";

export const getTransaction = async (): Promise<Transaction[] | null> => {
  const appStore = useAppStore();

  const userTransactionStore = useTransactionStore();
  const { updateTransactions } = useTransactionStore();

  const { updateIsLoading } = appStore;
  const { request, data } = useApi<string>({
    path: API_ROUTES.GET_TRANSACTIONS as string,
  });

  updateIsLoading(true);

  try {
    await request();

    if (data.value) {
      updateTransactions([...data.value.transactions]);
    }
  } finally {
    updateIsLoading(false);
  }
  return null;
};
