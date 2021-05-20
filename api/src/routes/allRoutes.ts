import authRoutes from './auth';
import dashboard from './dashboard/dashboard';

export const allRoutes = [...authRoutes, dashboard];
