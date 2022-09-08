import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { navItems } from "../../src/data/nav";
import { styles } from "../../src/data/navStyle";

export const Navbar: FC = () => {

    const { asPath } = useRouter();

    return (
        <>
            <nav className="navbar">
                <div className="home">
                    <Link href="/">
                        <div style={asPath === "/" ? styles : undefined}>Perfil</div>
                    </Link>
                </div>
                <div className="links__content">
                    {navItems.map(({ name, href, image }, index) => (
                        <div key={index}>
                            <Link href={href} >
                                <div style={asPath === href ? styles : undefined} >
                                    <Image src={image} alt="icono" width={20} height={20} />
                                    <div>{name}</div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </nav>
        </>
    )
}
