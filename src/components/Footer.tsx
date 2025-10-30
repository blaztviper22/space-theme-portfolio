import { ArrowUp } from "lucide-react"

function Footer() {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-boarder mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Berthem.co. All rights reserve
      </p>
      <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
        <ArrowUp size={20}/>
      </a>
    </footer>
  )
}

export default Footer