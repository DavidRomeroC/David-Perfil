import Head from "next/head";
import { FC } from "react"
import { Navbar } from "../../components";
import { LayoutProps } from "../../src/interfaces/interfaces";

export const Layout: FC<LayoutProps> = ({ children, title, foot }) => {
    return (
        <>
            <Head>
                <title> {title || "David's page"} </title>
            </Head>
            <div className="content">
                <Navbar />
                <main className="main__content">
                    {children}
                </main>
                {
                    foot && (
                        <footer className="footer">
                            <p>Copyright © 2022 David, Corp. All rights reserved.</p>
                        </footer>
                    )
                }
            </div>
        </>
    )
}
