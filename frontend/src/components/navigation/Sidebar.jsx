import React from 'react'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <div className="sidebar-container fixed w-full h-full overflow-hidden 
        justify-center bg-white grid pt-[120px] left-0 z-10"
            style={{
                opacity: `${isOpen ? "1" : "0"}`,
                top: ` ${isOpen ? "0" : "-100%"}`
            }}>
            <div className="w-full h-20 sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                        <Image src="/logo.svg" alt="MemoBuddy Logo" width={150} height={150} />
                        <ul className="hidden md:flex gap-x-6">
                            <li>
                                <Link href="/">
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <p>About</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <p>Contact</p>
                                </Link>
                            </li>
                        </ul>
                        <div className=''>
                            {
                                authStatus ?
                                    (<Link href="/login">
                                        <Button onClick={handleLogout}>Logout</Button>
                                    </Link>) :
                                    (<div className='flex gap-4'>
                                        <Link href="/login">
                                            <Button onClick={test}>Login</Button>
                                        </Link>
                                        <Link href="/register">
                                            <Button onClick={test}>Register</Button>
                                        </Link>
                                    </div>)
                            }

                        </div>
                        {/* <Button     /> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
