import axios from "axios";

export const API = axios.create({
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiZ2FyZGVuX3N0YXRlIl0sImV4cCI6MTgyOTQ3NTQ1OCwiaXNzIjoiQHRvbmFwaV9ib3QiLCJqdGkiOiJLWkYzNEhEUk9BS0c1MlFGS1RDU1RERVUiLCJzY29wZSI6ImNsaWVudCIsInN1YiI6InRvbmFwaSJ9.-Mhy6tcHlE0oxFY2yubT3nKL9Uf_4GzVpsJBVilCxi4ao2oeb27ey4JS3oenrqLeYBGtBlmMXBWOvweJDTu4DQ",
  },
});
