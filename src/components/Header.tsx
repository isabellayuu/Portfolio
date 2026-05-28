import './Header.css'

// `HeaderProps` lists the inputs this component accepts.
// Marking them as strings means TypeScript will complain if you
// forget one or pass the wrong type when you use <Header />.
interface HeaderProps {
  title: string
  subtitle: string
}

// We "destructure" title and subtitle straight out of props,
// so inside the component we can write {title} instead of {props.title}.
function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <p className="header__subtitle">{subtitle}</p>
    </header>
  )
}

export default Header
