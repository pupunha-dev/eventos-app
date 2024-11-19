import Logo from "./Logo";

export interface IPagina {
  children: React.ReactNode;
  className?: string;
}

export const Pagina = ({ children, className }: IPagina) => {
  return (
    <div className="
    flex flex-col items-center py-10 min-h-screen bg-[url('/background.png')] bg-cover">
      <Logo />
      <main className={`${className} flex flex-1 flex-col justify-center py-10 bg-red-400 container`}>
        {children}
      </main>
    </div >
  )
}