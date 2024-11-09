export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main className='font-open-sans'>{children}</main>;
}
