import Image from "next/image";
import { FC } from "react";
import { Layout } from "../../components";
import { Data } from "../../src/interfaces/interfaces";

const GitHubPage: FC<Data> = ({ user }) => {

    const {name, avatar_url, html_url, bio} = user;

    return (
        <Layout title="GitHub" foot={false}>
            <div className="github__page-content">
                <div className="github__content">
                    <div className="data__content">
                        <h1>{name}</h1>
                        <Image placeholder="blur" blurDataURL={avatar_url} src={avatar_url} alt="github" width={200} height={200} />
                        <p>{bio}</p>
                        <a href={html_url}> Ir a mi repositorio de GitHub </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://api.github.com/users/DavidRomeroC");
    const data = await res.json();

    return {
        props: {
            user: data,
        },
    };
}

export default GitHubPage;
