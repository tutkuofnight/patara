import Image from "next/image"

export type IconProps = {
  name: string
  size?: number
  className?: string
}

export function Icon({ name, size, className }: IconProps){
  const path = "/icons/" + name + ".svg"
 
  return <Image src={path} alt={name} width={size} height={size} className={className} />
}