import { serverFetch } from "../core/server"

export const getAllReports = () => {
    return serverFetch('/api/get-all-reports');
}