import React from "react"
import clsx from "clsx";// combine inputs to one string

type boundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
};

const Bounded = React.forwardRef<HTMLDivElement, boundedProps>(
    ({as: Comp = "section", className, children, ...restProps}, ref) =>{
        return(
            <Comp ref={ref} className = {clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16")}
            {...restProps}>
                <div className="mx-auto w-full max-w-7xl">
                    {children}
                </div>
            </Comp>
        )
    }
)

Bounded.displayName = "bounded"

export default Bounded