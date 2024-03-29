import type {NextPage} from 'next'
import styles from './style.module.scss';
import Head from 'next/head';
import Header from '../../components/Header';
import DescriptionSection from '../../components/DescriptionSection';
import Container from '../../components/Container';
import ContactFormContainer from '../../containers/ContactFormContainer';

const SignUpPage: NextPage = () => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0"
                />

                <title>{process.env.NEXT_PUBLIC_TITLE}</title>
                <meta name="description"
                      content={process.env.NEXT_PUBLIC_DESCRIPTION}
                />

                <meta name="description"
                      content={process.env.NEXT_PUBLIC_DESCRIPTION}
                />

                <meta property="og:url"
                      content={process.env.NEXT_PUBLIC_URL}
                />
                <meta property="og:type"
                      content="website"
                />
                <meta property="og:title"
                      content={process.env.NEXT_PUBLIC_TITLE}
                />
                <meta property="og:description"
                      content={process.env.NEXT_PUBLIC_DESCRIPTION}
                />
                <meta property="og:image"
                      content={process.env.NEXT_PUBLIC_OG_IMAGE}
                />

                <meta name="twitter:card"
                      content="summary_large_image"
                />
                <meta property="twitter:url"
                      content={process.env.NEXT_PUBLIC_URL}
                />
                <meta name="twitter:title"
                      content={process.env.NEXT_PUBLIC_TITLE}
                />
                <meta name="twitter:description"
                      content={process.env.NEXT_PUBLIC_DESCRIPTION}
                />
                <meta name="twitter:image"
                      content={process.env.NEXT_PUBLIC_OG_IMAGE}
                />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
            </Head>

            <main className={styles.main}>
                <Container className={styles.container}>
                    <Header/>
                    <DescriptionSection className={styles.descriptionSection}
                                        title={'Work smarter. Save time.'}
                                        description={'Easily manage your projects. Get on the list and receive in-app perks available only to early subscribers. We are moving into final development and getting ready for official launch soon.'}
                    />
                    <div className={styles.contactFormContainerWrapper}>
                        <ContactFormContainer className={styles.contactFormContainer}/>
                    </div>
                </Container>
            </main>
        </>
    );
}

export default SignUpPage;
