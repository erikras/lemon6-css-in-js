import NextLink from 'next/link'

interface LinkProps {
  href: string
  className?: string
  children: React.ReactNode
}
const Link = ({ href, className, children }: LinkProps) => (
  <NextLink href={href}>
    <a className={className}>{children}</a>
  </NextLink>
)

export default Link
