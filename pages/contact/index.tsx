import Link from "next/link";
import { Layout } from "../../components";

const ContactPage = () => (

    <Layout title="Contacto" foot={false}>
        <div className="contact__page-content">
            <p>Para contrataciones contactate conmigo enviandome un correo a:</p>
            <Link href="mailto:romerocandelariodavid@gmail.com?Subject=Asunto%20del%20email">
                <a>romerocandelariodavid@gmail.com</a>
            </Link>
        </div>
    </Layout>

)

export default ContactPage;