import { Icon } from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

type ActionProps = {
  title?: string,
  action?: VoidFunction
}

export default function Card({ iconName, title, value, action, className }: { iconName?: string, title: string, value: string, action?: ActionProps, className?: string }){
  return (
    <div className={`bg-muted rounded-3 w-full px-4 py-4 flex items-center gap-4 ${className ?? ""}`}>
      {iconName && (
        <div className="bg-secondary grid place-items-center p-3 rounded-2 w-[48px] h-[48px]">
          <Icon name={iconName} size={24} />
        </div>
      )}
      <div className="flex flex-1 justify-between items-center">
        <div className="w-full h-full flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm text-secondary-foreground">{ title }</p>
            <p className="font-medium text-2xl text-white">{ value }</p>
          </div>
          <div>
            { action && (
              <Button onClick={action.action} className="py-[25px] rounded-xl">{action.title}</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}