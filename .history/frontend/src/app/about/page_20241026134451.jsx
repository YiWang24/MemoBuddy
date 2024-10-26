export default function Wrapper() {
  return (
    <div className="wrapper">
      <div className="div">
        <div className="banner">
          <img
            className="element"
            alt="Element"
            src="https://c.animaapp.com/hGRjiP4I/img/1-1d63e1b0.png"
          />
        </div>

        <div className="navbar">
          <Link href="/login" passHref>
            <button className="button">
              <div className="text-wrapper">Login</div>
            </button>
          </Link>

          <div className="nav-links">
            <Link href="/" passHref>
              <div className="text-wrapper-2">Home</div>
            </Link>
            <Link href="/about" passHref>
              <div className="text-wrapper-3">About</div>
            </Link>
            <Link href="/contact" passHref>
              <div className="text-wrapper-4">Contact</div>
            </Link>
          </div>

          <Link href="/register" passHref>
            <button className="div-wrapper">
              <div className="text-wrapper">Register</div>
            </button>
          </Link>
          <div className="text-wrapper-5">MemoBuddy</div>
        </div>

        <div className="overlap">
          <div className="frame">
            <Link href="/contact">
            <div className="text-wrapper-6">Contact Us</div>
            </Link>
          </div>

          <div className="frame-wrapper">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-7">Name</div>

                <div className="rectangle" />

                <div className="text-wrapper-8">Email</div>

                <div className="rectangle-2" />

                <div className="text-wrapper-9">Subject</div>
}
