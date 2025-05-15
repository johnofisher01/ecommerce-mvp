import Link from "next/link"
export function Nav({children}: {children: ReactNode}) {
    return <nav className="bg-primary text-primary-foreground flex justify-center px-4">{children}</nav>
}

export function Navlink(props: ComponentProps<typeof Link>) {
    return <Link/>
}