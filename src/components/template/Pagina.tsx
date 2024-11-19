export interface IPagina {
  children: React.ReactNode;
  className?: string;
}

export const Pagina = ({ children, className }: IPagina) => {
  return (
    <div className="
    flex flex-col items-center py-10 min-h-screen bg-[url('/background.png')] bg-cover">
      <main className={className}>{children}</main>
    </div>
  )
}