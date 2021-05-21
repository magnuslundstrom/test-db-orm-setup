import authRoutes from './auth';
import groupRoutes from './groups';
export const allRoutes = [...authRoutes, ...groupRoutes];
