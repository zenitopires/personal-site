import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";

export default function Layout({ children }) {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        role
                    }
                }
            }
            `
        );

    let layout =
        <div style={{ margin: `3rem auto`, maxWidth: 900, padding: `0 1rem`}}>
            <header style={{ marginBotoom: `1.5rem` }}>
                <h1 style={{ display: `inline` }}>
                    {data.site.siteMetadata.title}
                </h1>
                <p style={{diplay: `inline`, marginTop: `-0.2rem`}}>
                    {data.site.siteMetadata.role}
                    <br/>
                    <a href="https://github.com/zenitopires">
                    <FontAwesomeIcon 
                        style={{ marginTop: `0.2rem`, marginRight: `0.8rem` }}
                        icon={faGithub}
                    />
                    </a>
                    <a href="https://instagram.com/zenitopires">
                    <FontAwesomeIcon 
                        style={{ marginTop: `0.2rem`, marginRight: `0.8rem` }} 
                        icon={faInstagram}
                    />
                    </a>
                </p>
            </header>
            {children}
        </div>; 
    return layout;
}