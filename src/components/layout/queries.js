import { useStaticQuery, graphql } from "gatsby";

export const useSiteTitleQuery = () =>
    useStaticQuery(
        graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    );
