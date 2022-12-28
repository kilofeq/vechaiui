import * as React from "react";
import { BreadcrumbProps, BreadcrumbItem, BreadcrumbItemProps, BreadcrumbLink, BreadcrumbLinkProps, BreadcrumbSeparator, BreadcrumbSeparatorProps } from "./breadcrumb";
interface Breadcrumb extends React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLElement>> {
    Item: typeof BreadcrumbItem;
    Link: typeof BreadcrumbLink;
    Separator: typeof BreadcrumbSeparator;
}
declare const Breadcrumb: Breadcrumb;
export type { BreadcrumbProps, BreadcrumbItemProps, BreadcrumbLinkProps, BreadcrumbSeparatorProps, };
export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, };
