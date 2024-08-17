import cors from 'cors';
import { HTTP_CORS_ORIGIN, HTTP_CORS_CREDENTIALS } from '@/config';

export default cors({
  origin: HTTP_CORS_ORIGIN,
  credentials: HTTP_CORS_CREDENTIALS
});
