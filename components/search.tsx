import { Icon } from "@/components/ui/icon"

export default function Search(){
  return (
    <div className="hidden md:block flex-1 max-w-md mx-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
          <Icon name="Search" size={24} />
        </div>
        <input
          type="text"
          placeholder="Enter Accounts, Platforms, NFTs, Token"
          className="bg-secondary text-sm rounded-2 border border-primary py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <div className="absolute top-[50%] translate-y-[-50%] right-[8px] py-[5] px-[6] grid place-items-center pointer-events-none bg-primary rounded-[10px]">
          <span className="text-xs text-secondary-foreground">⌘ K</span>
        </div>
      </div>
    </div>
  )
}