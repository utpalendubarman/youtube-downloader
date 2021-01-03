import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Contributors.css';

const Contributors = () => {
    const [contributorsList, updateContributorsList] = useState([]);
    useEffect(async () => {
        await fetch('https://api.github.com/repos/utpalendubarman/youtube-downloader/contributors')
            .then(response => response.json())
            .then(data => updateContributorsList(data))

    }, [])

    return (
        <>
            { contributorsList.length ?
                <section className="Contributors">
                    {
                        contributorsList.map(Contributor => {
                            return (
                                <a href={Contributor.html_url}
                                    key={Contributor.id}
                                    className="Contributor"
                                    target="_blank" rel="noopener noreferrer">

                                    <img className="Contributor__Image" src={Contributor.avatar_url} alt="Contributor Picture" />
                                    <h3 className="Contributor__Name">
                                        {Contributor.login}
                                    </h3>
                                </a>
                            )
                        })
                    }
                </section>
                :
                <>

                </>
            }
            <Link to="/" className="backButton" > Back to main</Link>
        </>
    )
}

export default Contributors
