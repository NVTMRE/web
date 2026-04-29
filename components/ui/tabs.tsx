import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const Tabs = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Root>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>>(function Tabs(
  { className, ...props },
  ref,
) {
  return <TabsPrimitive.Root ref={ref} className={cn("outline-none", className)} {...props} />
})

const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>>(function TabsList(
  { className, ...props },
  ref,
) {
  return <TabsPrimitive.List ref={ref} className={cn("inline-flex flex-wrap items-center gap-2 rounded-full bg-muted p-1 text-muted-foreground", className)} {...props} />
})

const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>(function TabsTrigger(
  { className, ...props },
  ref,
) {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "inline-flex min-w-[76px] items-center justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-sm hover:text-foreground",
        className,
      )}
      {...props}
    />
  )
})

const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>(function TabsContent(
  { className, ...props },
  ref,
) {
  return <TabsPrimitive.Content ref={ref} className={cn("mt-4 outline-none", className)} {...props} />
})

Tabs.displayName = TabsPrimitive.Root.displayName
TabsList.displayName = TabsPrimitive.List.displayName
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
