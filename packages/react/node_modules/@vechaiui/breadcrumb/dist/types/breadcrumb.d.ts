import { LinkProps } from "@vechaiui/link";
import { DefaultProps } from "@vechaiui/theme";
import * as React from "react";
export interface BreadcrumbSeparatorProps extends DefaultProps, React.HTMLAttributes<HTMLSpanElement> {
    children?: React.ReactNode;
}
declare const BreadcrumbSeparator: React.ForwardRefExoticComponent<BreadcrumbSeparatorProps & React.RefAttributes<HTMLSpanElement>>;
interface BreadcrumbLinkProps extends LinkProps {
    /**
     * If `true`, indicates that the breadcrumb item is active, adds
     * `aria-current=page` and renders a `span`
     */
    currentPage?: boolean;
}
export type { BreadcrumbLinkProps };
declare const BreadcrumbLink: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<any>>;
export interface BreadcrumbItemProps extends BreadcrumbProps {
    /**
     * If `true`, indicates that the breadcrumb item is active, adds
     * `aria-current=page` and renders a `span`
     */
    currentPage?: boolean;
    lastChild?: boolean;
}
declare const BreadcrumbItem: React.ForwardRefExoticComponent<BreadcrumbItemProps & React.RefAttributes<HTMLLIElement>>;
interface IBreadcrumbProps extends DefaultProps {
    separator?: string | React.ReactElement;
    addSeparator?: boolean;
    children?: React.ReactNode;
}
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement>, IBreadcrumbProps {
}
declare const Breadcrumb: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLElement>>;
export { Breadcrumb, BreadcrumbLink, BreadcrumbItem, BreadcrumbSeparator };
