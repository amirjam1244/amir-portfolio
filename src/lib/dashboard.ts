export type DashboardStats = {
  projectsCount: number;
  productsCount: number;
  accountStatus: "Active" | "Inactive";
};

export const MOCK_PROJECTS_COUNT = 3;

export function getDashboardStats(productsCount = 0): DashboardStats {
  return {
    projectsCount: MOCK_PROJECTS_COUNT,
    productsCount,
    accountStatus: "Active",
  };
}

export function getDisplayName(email: string) {
  const localPart = email.split("@")[0] ?? email;
  return localPart.charAt(0).toUpperCase() + localPart.slice(1);
}
