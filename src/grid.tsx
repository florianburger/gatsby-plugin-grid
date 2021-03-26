import { createGlobalStyle } from "styled-components"
import classnames from "classnames"
import React from "react"

createGlobalStyle`
".grid-container": {
    display: "flex",
    width: "100%"
},
`

export interface GridProps {
    xs?: "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    sm?: "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    md?: "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    lg?: "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    container?: boolean
    item?: boolean
    alignItems?: "flex-start" | "center" | "flex-end"
    justifyContent?: "flex-start" | "center" | "flex-end"
    wrap?: boolean
    className?: string
    style?: any
    children?: any
}
export default function Grid({
    xs = "auto",
    sm = "auto",
    md = "auto",
    lg = "auto",
    className,
    container = false,
    item = false,
    alignItems = undefined,
    justifyContent = undefined,
    wrap = false,
    style,
    children
}: GridProps) {
    if (alignItems || justifyContent) {
        if (!style) {
            style = {}
        }
        if (alignItems) {
            style.alignItems = alignItems
        }
        if (justifyContent) {
            style.justifyContent = justifyContent
        }
    }

    return (
        <div
            className={classnames(
                container ? "grid-container" : null,
                item ? "grid-item" : null,
                wrap ? "grid-container-wrap" : null,
                xs != "auto" ? `xs${xs}` : null,
                sm != "auto" ? `sm${sm}` : null,
                md != "auto" ? `md${md}` : null,
                lg != "auto" ? `lg${lg}` : null,
                className
            )}
            style={style}
        >
            {children}
        </div>
    )
}
