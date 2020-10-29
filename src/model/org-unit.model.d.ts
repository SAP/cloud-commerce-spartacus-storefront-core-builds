import { Address } from './address.model';
import { Currency, User } from './misc.model';
export interface CostCenter {
    active?: boolean;
    activeFlag?: boolean;
    code?: string;
    name?: string;
    originalCode?: string;
    unit?: B2BUnit;
    currency?: Currency;
}
export declare enum B2BUserGroup {
    B2B_ADMIN_GROUP = "b2badmingroup",
    B2B_CUSTOMER_GROUP = "b2bcustomergroup",
    B2B_MANAGER_GROUP = "b2bmanagergroup",
    B2B_APPROVER_GROUP = "b2bapprovergroup"
}
export interface B2BUnit {
    active?: boolean;
    addresses?: Address[];
    uid?: string;
    name?: string;
    parentOrgUnit?: Partial<B2BUnit>;
    approvalProcess?: B2BApprovalProcess;
    administrators?: B2BUser[];
    approvers?: B2BUser[];
    customers?: B2BUser[];
    costCenters?: CostCenter[];
    managers?: B2BUser[];
}
export interface B2BUser extends User {
    active?: boolean;
    approvers?: [];
    orgUnit?: B2BUnit;
    roles?: string[];
    selected?: boolean;
    isAssignedToApprovers?: boolean;
    email?: string;
}
export interface B2BApprovalProcess {
    code?: string;
    name?: string;
}
export interface OrderApprovalPermissionType {
    code?: string;
    name?: string;
}
