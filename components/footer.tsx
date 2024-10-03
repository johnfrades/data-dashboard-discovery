import DarkModeToggle from "./dark-mode-toggle";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container flex items-center justify-center py-4 gap-4">
        <p className="text-sm text-muted-foreground">
         Data Dashboard Discovery
        </p>
        <DarkModeToggle />
      </div>
    </footer>
  )
}

export default Footer