/**
 * Welcome to @reach/visually-hidden!
 *
 * Provides text for screen readers that is visually hidden.
 * It is the logical opposite of the `aria-hidden` attribute.
 *
 * @see https://snook.ca/archives/html_and_css/hiding-content-for-accessibility
 * @see https://a11yproject.com/posts/how-to-hide-content/
 * @see Docs     https://reach.tech/visually-hidden
 * @see Source   https://github.com/reach/reach-ui/tree/main/packages/visually-hidden
 */
import * as React from "react";
/**
 * VisuallyHidden
 *
 * Provides text for screen readers that is visually hidden.
 * It is the logical opposite of the `aria-hidden` attribute.
 */
declare const VisuallyHidden: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<any>>;
/**
 * @see Docs https://reach.tech/visually-hidden#visuallyhidden-props
 */
interface VisuallyHiddenProps {
    /**
     * @see Docs https://reach.tech/visually-hidden#visuallyhidden-children
     */
    children?: React.ReactNode;
}
export type { VisuallyHiddenProps };
export { VisuallyHidden };
export default VisuallyHidden;
