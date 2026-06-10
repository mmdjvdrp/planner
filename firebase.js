import { getAuth ... }
import { initializeApp ... }

const firebaseConfig = {...}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);